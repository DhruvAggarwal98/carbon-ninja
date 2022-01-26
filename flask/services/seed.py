import os
import mysql.connector as mariadb
import pandas as pd 
from constants.queries import DROP_TABLE_IF_EXISTS, SQL_INSERT_PRODUCTION
from constants.errors import ERROR_CONNECTING_MARIADB, ERROR_RETRIEVING_FOODS

class SeedService():
  def __init__(self):
    self.conn = mariadb.connect(
      user=os.environ.get("MYSQL_USER", "admin"),
      password=os.environ.get("MYSQL_PASSWORD"),
      host="mariadb",
      port=3306,
      database=os.environ.get("MYSQL_DATABASE", "db")
    )

  def load_all_foods(self):
    """seed food production data
    """      
    data = pd.read_csv("files/Food_Production.csv",index_col=False,delimiter=",",usecols=[0,1,2,3,4,5,6,7,8])
    try:
      if self.conn.is_connected():
          cur = self.conn.cursor()
          cur.execute("Select database();")
          cur.fetchone()
          cur.execute(DROP_TABLE_IF_EXISTS % ('food_production'))
          cur.execute("CREATE TABLE food_production( \
              food_product varchar(255),   \
              land_use_change varchar(255), \
              animal_feed varchar(255), \
              farm varchar(255), \
              processing varchar(255), \
              transport varchar(255), \
              packging varchar(255), \
              retail varchar(255), \
              total_emissions varchar(255))")
          for i,row in data.iterrows():
              cur.execute(SQL_INSERT_PRODUCTION,tuple(row))
              self.conn.commit()

    except mariadb.Error as e:
      print(ERROR_CONNECTING_MARIADB % (e))
    except Exception as e:
      print(ERROR_RETRIEVING_FOODS % (e))
