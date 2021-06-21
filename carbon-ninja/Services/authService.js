import {FOODS_API_BASE_URL} from '@env'
import { useState, useEffect } from 'react';

export type AuthData = {
    success: boolean,
    uid: int;
};
const signIn = (username: string, _password: string): Promise<AuthData> => {


  // this is a mock of an API call, in a real app
  // will be need connect with some real API,
  // send email and password, and if credential is corret
  //the API will resolve with some token and another datas as the below
  
//   let formData = new FormData();
//   formData.append('user', { username: username, password: _password});
//   formData.append('username', {username});
//   formData.append('password', {_password});

   var obj;
   var _success; 
   var _uid;

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

const JWTTokenMock =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikx1Y2FzIEdhcmNleiIsImlhdCI6MTUxNjIzOTAyMn0.oK5FZPULfF-nfZmiumDGiufxf10Fe2KiGe9G5Njoa64';
