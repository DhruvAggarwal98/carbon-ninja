from .mariadb import MariaDBService
import mysql.connector as mariadb

class UserService():
    def __init__(self):
        self.db = MariaDBService() # connect to db 

    def get_user_emissions(self, uid):
        try:
            emissions = 0.0
            cur = self.db.conn.cursor()
            query = "SELECT emissions FROM  users_entries WHERE user_id = %s;"
            cur.execute(query, (uid,))
            entries = cur.fetchall()
            for entry in entries:
                emissions += float(entry[0])

            # return user's emissions
            return emissions
            
        except mariadb.Error as e:
            print(f"Error while connection to Mariadb: {e}")
        except Exception as e:
            print(f"Error retrieving user's total emissions: {e}")
        return []
        
