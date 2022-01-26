import os
from flask import jsonify
import mysql.connector as mariadb
from constants.queries import SQL_SELECT_EMISSIONS
from constants.errors import ERROR_CONNECTING_MARIADB, ERROR_RETRIEVING_EMISSIONS, ERROR_RETRIEVING_FOODS

class MariaDBService():
  def __init__(self):
    self.conn = mariadb.connect(
      user=os.environ.get("MYSQL_USER", "admin"),
      password=os.environ["MYSQL_PASSWORD"],
#      password='pw',
      host=os.environ.get("MYSQL_HOST", "mariadb"),
#      host='localhost',
      port=3306,
      database=os.environ.get("MYSQL_DATABASE", "db")
    )

  def get_all_foods(self):
    """Get all foods

    Returns:
        list: list of foods
    """    
    try:
      cur = self.conn.cursor(buffered=True)
      cur.execute("SELECT food_product FROM food_production;")
      
      foods = []
      for food_product in cur:
          foods.append(food_product[0])
      return foods

    except mariadb.Error as e:
      print(ERROR_CONNECTING_MARIADB % (e))
    except Exception as e:
      print(ERROR_RETRIEVING_FOODS % (e))

    return []

  def get_food_emissions(self, food_names):
    """Get food emissions data

    Args:
        food_names (list[str]): list of foods to retrieve emissions for

    Returns:
        Response: json representation of food emissions data
    """    
    try:
      dict = {} # empty dict
      for food_name in food_names:
        cur = self.conn.cursor()
        cur.execute(SQL_SELECT_EMISSIONS, (food_name,))
        (emissions, serving_size) = cur.fetchone()
        emissions = (float(emissions))       
        emissions = emissions * ( serving_size / 1000 ) # Calculate kg emissions / kg food
        dict[food_name] = emissions
      return jsonify(dict)
    except mariadb.Error as e:
      print(ERROR_CONNECTING_MARIADB % (e))
    except Exception as e:
      print(ERROR_RETRIEVING_EMISSIONS % (e))

    return []
