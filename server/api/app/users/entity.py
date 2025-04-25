from dataclasses import dataclass, asdict

@dataclass
class User:
    id: int
    username: str
    email: str

    def to_json(self) -> dict:
        return asdict(self)

    @staticmethod
    def from_json(data: dict) -> 'User':
        return User(
            id=data.get("idUser"),
            username=data.get("username"),
            email=data.get("email")
        )
