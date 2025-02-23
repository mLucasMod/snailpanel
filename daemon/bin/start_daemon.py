import os

from ..config import PID_FILE
from src.daemon import Daemon

def run():
    try:
        with open(PID_FILE, 'w') as pid_file:
            pid_file.write(str(os.getpid()))
        print(f"PID written in {PID_FILE}")

        daemon = Daemon()
        daemon.run()

    except Exception as e:
        print(f"An error  occurred while starting the daemon : {e}")

if __name__ == "__main__":
    run()