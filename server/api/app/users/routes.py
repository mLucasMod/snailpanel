from flask import Blueprint, jsonify, request
from api.app.users.controller import UserController

user_bp = Blueprint('users', __name__)

@user_bp.route('/', methods=['GET'])
def get_users():
    users = UserController.getAllUsers()
    return jsonify(users), 200

@user_bp.route('/', methods=['POST'])
def add_user():
    data = request.json
    new_user = UserController.addUser(data)
    return jsonify(new_user), 201

@user_bp.route('/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = UserController.getUser(user_id)
    if user:
        return jsonify(user), 200
    else:
        return jsonify({"error": "User not found"}), 404

@user_bp.route('/<int:user_id>', methods=['DELETE'])
def del_user(user_id):
    new_user = UserController.delUser(user_id)
    return jsonify(new_user), 201