from typing import Union

from api.app.users.entity import User
from database.sqlite import Database

class AuthController:
    @staticmethod
    async def findUser(login: str, password: str) -> Union[User, bool]:
        row = await Database.fetchone("SELECT * FROM users WHERE (username = ? OR email = ?) AND password = ?", (login, login, password))
        return User.from_json(row) if row else False

    @staticmethod
    async def userExists(username: str) -> User:
        row = await Database.fetchone("SELECT * FROM users WHERE (username = ?)", (username,))
        return (row)
