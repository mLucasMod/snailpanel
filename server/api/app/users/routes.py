from flask import Blueprint, abort, jsonify, make_response, request
from api.app.users.controller import UserController

user_bp = Blueprint('users', __name__)

@user_bp.route('/', methods=['GET'])
async def get_users():
    users = await UserController.getAllUsers()
    return jsonify({"users": users}), 200

@user_bp.route('/', methods=['POST'])
async def add_user():
    data = request.json
    username: str = data.get("username")
    email: str = data.get("email")
    password: str = data.get("password")

    user_id = await UserController.addUser(username, email, password)
    return jsonify(user_id), 201

@user_bp.route('/<int:user_id>', methods=['GET'])
async def get_user(user_id):
    user = await UserController.getUser(user_id)
    if not user:
        abort(404)

    return jsonify(user), 200

@user_bp.route('/<int:user_id>', methods=['DELETE'])
async def del_user(user_id):
    result = await UserController.delUser(user_id)

    if not result:
        abort(409)

    return make_response(), 204
