import {FOODS_API_BASE_URL} from '@env'

export type AuthData = {
  username: string;
  name: string;
};
const signIn = (email: string, _password: string): Promise<AuthData> => {
  // this is a mock of an API call, in a real app
  // will be need connect with some real API,
  // send email and password, and if credential is corret
  //the API will resolve with some token and another datas as the below
  
  // let formData = new FormData();
  // formData.append('user', { username: username, password: _password});
  // formData.append('username', {username});
  // formData.append('password', {_password});

  // fetch(FOODS_API_BASE_URL + '/users', {
  //       method: 'POST',
  //       body: formData
  //     }).then((response) => response.json())
  //       .catch((error) => console.error(error))
  //   []);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: JWTTokenMock,
        email: email,
        name: 'Lucas Garcez',
      });
    }, 1000);
  });
};

export const authService = {
  signIn,
};

const JWTTokenMock =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikx1Y2FzIEdhcmNleiIsImlhdCI6MTUxNjIzOTAyMn0.oK5FZPULfF-nfZmiumDGiufxf10Fe2KiGe9G5Njoa64';
