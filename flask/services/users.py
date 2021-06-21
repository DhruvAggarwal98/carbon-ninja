from .mariadb import MariaDBService
import mysql.connector as mariadb
from flask import jsonify

class AccountService():
    def __init__(self):
        self.db = MariaDBService() # connect to db 

    def login(self, creds):
        ret = (False, "") # true if success, false if unsuccessful with error message
        try:
            cur = self.db.conn.cursor()

            username = creds["username"]
            pw = creds["password"]
            query = "SELECT password FROM users WHERE username = %s;"
            cur.execute(query, (username,))
            
            # Username isnt in database - need to register
            resp = cur.fetchone()
            if resp is None:
                ret = (False, "User: " + username + " not registered. Please register or try again.")
                return jsonify(ret)

            users_pw = resp[0]

            # Correct username - wrong password
            if users_pw != pw:
                ret = (False, "Incorrect password for user: " + username)
                return jsonify(ret)

            # Correct username and password - return true and user id
            else:
                query = "SELECT user_id FROM users WHERE username = %s;"
                cur.execute(query, (username,))
                uid = cur.fetchone()[0]
                ret = (True, uid)
                return jsonify(ret)

            # return response
            return jsonify(ret)
            
        except mariadb.Error as e:
            print(f"Error while connection to Mariadb: {e}")
            return jsonify(ret)

        except Exception as e:
            print(f"Error attempting to login user: {e}")
            return jsonify(ret)

        return jsonify(ret)
