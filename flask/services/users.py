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

    def log_user_entry(self, uid, entry):
        try:
            emissions = entry["emissions"]
            cur = self.db.conn.cursor()
            query = "INSERT INTO users_entries (user_id, emissions) VALUES (%s, %s);"
            cur.execute(query, (uid, emissions, ))

            # return success message
            return "Success"

        except mariadb.Error as e:
            print(f"Error while connecting to Mariadb: {e}")
        except Exception as e:
            print(f"Error logging user's entry: {e}")
        return []
            
        
