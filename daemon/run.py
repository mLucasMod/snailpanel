import os
from src.daemon import Daemon
from config import PID_FILE

def run():
    daemon = Daemon()
    
    # Écrire le PID dans un fichier pour pouvoir l'arrêter plus tard
    with open(PID_FILE, 'w') as pid_file:
        pid_file.write(str(os.getpid()))

    daemon.run()  # Lancer le daemon

if __name__ == "__main__":
    run()