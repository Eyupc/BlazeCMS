import axios from 'axios';

export async function TryChangePassword(
  username: string,
  password: string,
  rePassword: string,
  token: string
) {
  return await axios('/api/reset/password', {
    method: 'POST',
    data: {
      username: username,
      password: password,
      rePassword: rePassword,
      token: token
    }
  }).then((resp) => {
    if (resp.data.status as Boolean) return true;
    else return resp.data.errors;
  });
}
