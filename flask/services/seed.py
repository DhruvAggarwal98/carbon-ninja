import os
import mysql.connector as mariadb
import pandas as pd 

class SeedService():
  def __init__(self):
    self.conn = mariadb.connect(
      user=os.environ.get("MYSQL_USER", "admin"),
      password=os.environ.get("MYSQL_PASSWORD"),
      host="mariadb",
      port=3306,
      database=os.environ.get("MYSQL_DATABASE", "db")
    )

  def load_all_foods():
      print("loading foods")
      data = pd.read_csv("files/Food_Production.csv",index_col=False,delimiter=",",usecols=[0,1,2,3,4,5,6,7,8])
      try:
        if self.conn.is_connected():
            cur = conn.cursor()
            cur.execute("Select database();")
            record = cur.fetchone()
            print("Youre connected to database: ",record)
            cur.execute('DROP TABLE IF EXISTS food_production;')
            print("Creating table....")
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
                
                
                # */eutrophying_emissions_per_1000kcal varchar(255), \
                # eutrophying_emissions_per_kilogram varchar(255), \
                # eutrophying_emissions_per_100g_protein varchar(255), \
                # freshwater_withdrawals_per_1000kcal varchar(255), \
                # freshwater_withdrawals_per_100g_protein varchar(255), \
                # freshwater_withdrawals_per_kilogram varchar(255), \
                # greenhouse_gas_emissions_per_1000kcal varchar(255), \
                # greenhouse_gas_emissions_per_100g_protein varchar(255), \
                # land_use_per_1000kcal varchar(255), \
                # land_use_per_kilogram varchar(255), \
                # land_use_per_100g_protein varchar(255), \
                # scarcity_weighted_water_use_per_kilogram varchar(255), \
                # scarcity_weighted_water_use_per_100g_protein varchar(255), \
                # scarcity_weighted_water_use_per_1000kcal varchar(255))")
            print("Table is created")
            for i,row in data.iterrows():
                sql = "INSERT INTO kaggledb.food_production VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s)"
                cur.execute(sql,tuple(row))
                conn.commit()

      except mariadb.Error as e:
        print(f"Error while connection to Mariadb: {e}")
      except Exception as e:
        print(f"Error retrieving foods: {e}")
