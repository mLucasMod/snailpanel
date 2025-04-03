class Daemon:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(Daemon, cls).__new__(cls)
        return cls._instance

    def run(self):
        print("Daemon démarré...")  
        while True:
            pass

    @staticmethod
    def do_something():
        print("Daemon action")