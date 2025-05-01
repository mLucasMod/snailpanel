from flask import Blueprint, abort

server_bp = Blueprint('servers', __name__)

@server_bp.route("/", methods=["GET"])
def get_servers():
    abort(501)

@server_bp.route("/", methods=["POST"])
def add_server():
    abort(501)

@server_bp.route("/<string:server_id>", methods=["GET"])
def get_server(server_id: str):
    abort(501)

@server_bp.route("/<string:server_id>", methods=["PUT"])
def edit_server(server_id: str):
    abort(501)

@server_bp.route("/<string:server_id>", methods=["DELETE"])
def del_server(server_id: str):
    abort(501)

# DAEMON
@server_bp.route("/<string:server_id>/start", methods=["POST"])
def start_server(server_id: str):
    abort(501)

@server_bp.route("/<string:server_id>/stop", methods=["POST"])
def stop_server(server_id: str):
    abort(501)

@server_bp.route("/<string:server_id>/kill", methods=["POST"])
def kill_server(server_id: str):
    abort(501)

@server_bp.route("/<string:server_id>/install", methods=["POST"])
def install_server(server_id: str):
    abort(501)

@server_bp.route("/<string:server_id>/command", methods=["POST"])
def server_send_command(server_id: str):
    abort(501)

@server_bp.route("/<string:server_id>/stats", methods=["POST"])
def server_stats(server_id: str):
    abort(501)

# USERS
@server_bp.route("/<string:server_id>/users", methods=["GET"])
def get_server_users(server_id: str):
    abort(501)

@server_bp.route("/<string:server_id>/users/<int:user_id>", methods=["POST"])
def add_server_user(server_id: str, user_id: int):
    abort(501)

@server_bp.route("/<string:server_id>/users/<int:user_id>", methods=["PUT"])
def edit_server_user(server_id: str, user_id: int):
    abort(501)

@server_bp.route("/<string:server_id>/users/<int:user_id>", methods=["DELETE"])
def del_server_user(server_id: str, user_id: int):
    abort(501)

# SETTINGS
@server_bp.route("/<string:server_id>/settings", methods=["GET"])
def get_server_settings(server_id: str):
    abort(501)

@server_bp.route("/<string:server_id>/settings", methods=["PUT"])
def edit_server_settings(server_id: str):
    abort(501)
