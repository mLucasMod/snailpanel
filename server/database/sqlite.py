import os
from typing import Union
import aiosqlite
from config import get_database_config

# TODO generic Database class
# TODO support SQLite and MySQL
class Database:
    _instance = None
    _initialized = False

    def __init__(self):
        config = get_database_config()
        self.db_name = config["path"]

    @classmethod
    async def get_instance(cls):
        if cls._instance is None:
            cls._instance = cls()
        if not cls._initialized:
            await cls._instance.initialize()
            cls._initialized = True
        return cls._instance

    async def initialize(self):
        script_path = os.path.join(os.path.dirname(__file__), "schema.sql")
        with open(script_path, "r", encoding="utf-8") as f:
            sql_script = f.read()

        async with aiosqlite.connect(self.db_name) as db:
            await db.executescript(sql_script)
            await db.commit()

    @staticmethod
    async def insert(query, params=()) -> Union[int, str]:
        db = await Database.get_instance()
        async with aiosqlite.connect(db.db_name) as conn:
            cursor = await conn.execute(query, params)
            await conn.commit()
            last_row_id = cursor.lastrowid
            return last_row_id if isinstance(last_row_id, int) else str(last_row_id)

    @staticmethod
    async def execute(query, params=()) -> int:
        db = await Database.get_instance()
        async with aiosqlite.connect(db.db_name) as conn:
            cursor = await conn.execute(query, params)
            await conn.commit()
            return cursor.lastrowid

    @staticmethod
    async def fetchone(query, params=()) -> dict | None:
        db = await Database.get_instance()
        async with aiosqlite.connect(db.db_name) as conn:
            conn.row_factory = aiosqlite.Row
            cursor = await conn.execute(query, params)
            row = await cursor.fetchone()
            return dict(row) if row else None

    @staticmethod
    async def fetchall(query, params=()) -> list[dict]:
        db = await Database.get_instance()
        async with aiosqlite.connect(db.db_name) as conn:
            conn.row_factory = aiosqlite.Row
            cursor = await conn.execute(query, params)
            rows = await cursor.fetchall()
            return [dict(row) for row in rows]
