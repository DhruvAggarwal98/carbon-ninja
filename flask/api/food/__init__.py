import os
from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from services import MariaDBService

# Foods
# shows a list of all foods, and lets you POST to add a new food
class Food(Resource):
  def __init__(self):
    self.db = MariaDBService()

  # Get emissions of food
  def get(self, food_name):
    return self.db.get_food_emissions(food_name)

