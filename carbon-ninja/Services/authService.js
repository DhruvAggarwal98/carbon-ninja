import {FOODS_API_BASE_URL} from '@env'
import { useState, useEffect } from 'react';

export type AuthData = {
    success: boolean,
    uid: int,
    msg: string;
};
const signIn = (username: string, _password: string): Promise<AuthData> => {

    var obj;
    var _success;
    var _uid;
    var _msg;

    return new Promise((resolve) => {
        data = '{ "username" : "' + username + '", "password" : "' + _password  + '" }'
        fetch(FOODS_API_BASE_URL + '/users/login', {
	        method: 'POST',
	        headers: {
	            Accept: 'application/json', 'Content-Type': 'application/json'
            },
            body: data
        }).then((response) => response.json()) // response is (boolean, error message)
          .then(data => obj = data)
          .then(() => {
	          _success = obj[0];
	          if (_success) {
	            _uid = obj[1]
	            _msg = null
	          } else {
	            _uid = null
	            _msg = obj[1]
	          }
	      })
	      .catch((error) => console.error(error))
	   
        setTimeout(() => {
            resolve({
	            success: _success,
                uid: _uid,
                msg: _msg,
            });
        }, 1000);
    });
};

const createAccount = (username: string, _password: string): Promise<AuthData> => {

    var obj;
    var _success;
    var _uid;
    var _msg;

    return new Promise((resolve) => {
        var data = '{ "username" : "' + username + '", "password" : "' + _password  + '" }'
        fetch(FOODS_API_BASE_URL + '/users', {
	        method: 'POST',
	        headers: {
	            Accept: 'application/json', 'Content-Type': 'application/json'
            },
            body: data
        }).then((response) => response.json()) // response is (boolean, error message)
          .then(data => obj = data)
          .then(() => {
	          _success = obj[0];
	          _msg = obj[1];
	      })
	      .catch((error) => console.error(error))

        setTimeout(() => {
            resolve({
	            success: _success,
              msg: _msg,
            });
        }, 1000);
    });
};

export const authService = {
  signIn, createAccount,
};
