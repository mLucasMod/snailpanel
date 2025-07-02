from flask import Blueprint, abort, make_response, request
from flask_jwt_extended import get_jwt_identity, jwt_required

from api.app.users.controller import UserController
from api.utils import ok

user_bp = Blueprint('users', __name__)

@user_bp.route('/', methods=['GET'])
@jwt_required()
async def get_users():
    users = await UserController.getAllUsers()
    return ok(users)

@user_bp.route('/me', methods=['GET'])
@jwt_required()
async def get_user_me():
    current_user = await UserController.getUser(get_jwt_identity())
    if not current_user:
        abort(404)

    return ok(current_user)

@user_bp.route('/', methods=['POST'])
@jwt_required()
async def add_user():
    data = request.json
    username: str = data.get("username")
    email: str = data.get("email")
    password: str = data.get("password")

    if not username or not email or not password:
        abort(400)

    user_id = await UserController.addUser(username, email, password)
    return ok(user_id, 201)

@user_bp.route('/<int:user_id>', methods=['GET'])
@jwt_required()
async def get_user(user_id):
    user = await UserController.getUser(user_id)
    if not user:
        abort(404)

    return ok(user)

@user_bp.route('/<int:user_id>', methods=['PUT'])
@jwt_required()
async def edit_user(user_id):
    abort(501)

@user_bp.route('/<int:user_id>', methods=['DELETE'])
@jwt_required()
async def del_user(user_id: int):
    result = await UserController.delUser(user_id)
    if not result:
        abort(409)

    return make_response(), 204
