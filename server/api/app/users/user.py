class User:
    def __init__(self, id: int, nom: str):
        self.id = id
        self.nom = nom

    def toJson(self) -> map:
        return {"id": self.id, "nom": self.nom}