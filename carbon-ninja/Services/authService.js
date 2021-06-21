import {FOODS_API_BASE_URL} from '@env'
import { useState, useEffect } from 'react';

export type AuthData = {
    success: boolean,
    uid: int;
};
const signIn = (username: string, _password: string): Promise<AuthData> => {

   var obj;
   var _success; 
   var _uid;
   console.log("running")

   return new Promise((resolve) => {
   data = '{ "username" : "' + username + '", "password" : "' + _password  + '" }'
   fetch(FOODS_API_BASE_URL + '/users/login', {
	    method: 'POST',
      headers: {
	      Accept: 'application/json',
                'Content-Type': 'application/json'
      },	   
      body: data
       }).then((response) => response.json()) // response is (boolean, error message)
          .then(data => obj = data)
          .then(() => { 
	          _success = obj[0];
	          _uid = obj[1];
	        })
          .catch((error) => console.error(error))
	   
        setTimeout(() => {
        resolve({
	        success: _success,
          uid: _uid,
       });
     }, 1000);
   });
};

export const authService = {
  signIn,
};
