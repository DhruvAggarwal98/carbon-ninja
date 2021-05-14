import os
import mysql.connector as mariadb

class MariaDBService():
  def __init__(self):
    self.conn = mariadb.connect(
      user=os.environ.get("MYSQL_USER", "admin"),
      password=os.environ["MYSQL_PWD"],
      host=os.environ.get("MYSQL_HOST", "mariadb"),
      port=3306,
      database="kaggledb"
    )

  def get_all_foods(self):
    try:
      # Get cursor and query MariaDB - eager loading
      cur = self.conn.cursor(buffered=True)
      cur.execute("SELECT food_product FROM kaggledb.food_production;")

      # Add each row to list
      foods = []
      for food_product in cur:
          foods.append(food_product[0])
      
      # return results
      return foods

    except mariadb.Error as e:
      print(f"Error while connection to Mariadb: {e}")
    except Exception as e:
      print(f"Error retrieving foods: {e}")

    return []