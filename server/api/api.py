from api.database import Database


class API:
    def __init__(self, database: Database):
        self.database = database