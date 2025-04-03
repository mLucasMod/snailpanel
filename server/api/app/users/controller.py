from api.app.users.user import User

from daemon.daemon import Daemon

class UserController:
    def getAllUsers() -> list[User]:
        users = [
            User(1, "test1").toJson(),
            User(2, "test2").toJson(),
            User(3, "test3").toJson()
        ]
        Daemon.do_something()
        return {"users": users}

    def addUser(name: str) -> int:
        pass

    def getUser(id: int) -> User|bool:
        user = User(id, f"test{id}").toJson()
        return user

    def delUser(self, id: int) -> bool:
        pass