DROP_TABLE_IF_EXISTS = "DROP TABLE IF EXISTS %s;"
SQL_INSERT_PRODUCTION = "INSERT INTO kaggledb.food_production VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s);"
SQL_SELECT_EMISSIONS = "SELECT Total_emissions, Serving_Size FROM food_production WHERE Food_product = %s;"