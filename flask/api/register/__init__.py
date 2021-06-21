import os
from flask import Flask, request, jsonify, abort
from flask_restful import Resource, Api
from services import AccountService

# Create user
class Register(Resource):
  def __init__(self):
    self.service = AccountService()

  # Create user
  def post(self):
    data = request.json
    if (not "username" in data) or (not "password" in data):
      abort(400)
    return self.service.register(data)

