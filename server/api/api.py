from flask import Flask
from api.errors import register_errors
from api.extensions import init_extensions
from api.routes import register_routes
from config import get_api_config


class Api:
    def __init__(self):
        self.app = Flask(__name__)

        init_extensions(self.app)
        register_errors(self.app)
        register_routes(self.app)

    def run(self):
        config = get_api_config("flask")

        self.app.run(
            host=config.get("host", "127.0.0.1"),
            port=config.get("port", 5000),
            debug=config.get("debug", False)
        )
