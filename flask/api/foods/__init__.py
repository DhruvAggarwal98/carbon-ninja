import os
from flask import Flask, request, jsonify
from flask_restful import Resource, Api
#from export_data import load_csv

# Foods
# shows a list of all foods, and lets you POST to add a new food
class Foods(Resource):

  # Initialize by establishing connection to mariadb
#  def __init__(self):
#    load_csv()

  #  Get all foods
  #  Used to populate app drop-down
  def get(self):
    print("getting all foods...")
    return "Success"
