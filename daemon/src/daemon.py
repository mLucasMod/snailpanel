import time

class Daemon:
    def __init__(self):
        pass

    def run(self):
        print("Daemon started")
        while True:
            print("Checking servers...")
            time.sleep(5)
