import os
from flask import Flask, request, jsonify, abort
from flask_restful import Resource, Api
from services import AccountService

# Interact with user tables
class Login(Resource):
  def __init__(self):
    self.service = AccountService()

  # Login user
  def post(self):
    data = request.json
    if (not "username" in data) or (not "password" in data):
      abort(400)
    return self.service.login(data)

