import time

# from src.logger import Logger
from src.server_manager import ServerManager

class Daemon:
    def __init__(self):
        # self.logger = Logger()
        self.server_manager = ServerManager()

    def run(self):
        print("Daemon started.")
        # self.logger.log("Daemon started.")

        while True:
            self.server_manager.check_servers()
            time.sleep(5)