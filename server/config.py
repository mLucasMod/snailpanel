import json
import os

def get_config(name: str):
    config_path = os.path.join(os.path.dirname(__file__), "config/server.json")

    if not os.path.exists(config_path):
        raise FileNotFoundError(f"File not found : {config_path}")

    with open(config_path, "r") as file:
        return json.load(file).get(name, {})
