import os
from flask import Flask, request, jsonify
from flask_restful import Resource, Api
import mysql.connector as mariadb
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
    
    # Connect to MariaDB
    # this function needs to be stored somewhere else but i couldnt get import to work
    try:
        conn = mariadb.connect(
                user="admin",
                password="pass",
                host="mariadb",
                port=3306,
                database="kaggledb")

    # Throw error msg and exit
    except mariadb.Error as e:
        print(f"Error while connection to Mariadb: {e}")
        sys.exit(1)
    
    # Get cursor and query MariaDB
    cur = conn.cursor()
    cur.execute("SELECT food_product FROM food_production;")

    # Print results
    for food_product in cur:
        print(f"Food: {food_product}")

    return "Success"
