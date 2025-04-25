from typing import List, Union
from api.app.users.entity import User
from database.sqlite import Database

class UserController:
    @staticmethod
    async def getAllUsers() -> List[User]:
        rows = await Database.fetchall("SELECT * FROM Users")
        return [User.from_json(row) for row in rows]

    @staticmethod
    async def addUser(username: str, email: str, password: str) -> int:
        return await Database.insert("INSERT INTO Users (username, email, password) VALUES (?, ?, ?)", (username, email, password))

    @staticmethod
    async def getUser(id: int) -> Union[User, bool]:
        row = await Database.fetchone("SELECT * FROM Users WHERE idUser = ?", (id,))
        return User.from_json(row) if row else False

    @staticmethod
    async def delUser(id: int) -> bool:
        affected = await Database.execute("DELETE FROM Users WHERE idUser = ?", (id,))
        return affected > 0
