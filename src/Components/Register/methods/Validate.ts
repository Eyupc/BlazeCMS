import axios from 'axios';

const REGEX_USERNAME = new RegExp('(^[a-zA-Z0-9-=?!@:.]{1,19}$)');
export const Validate = async (
  type: 'username' | 'email',
  name: string
): Promise<boolean | null> => {
  if (!REGEX_USERNAME.test(name) && type == 'username') {
    // is max 18 characters long, is an allowed username
    return false;
  }

  return await axios
    .get(`/api/utils/${type}/${name}`, {
      method: 'GET',
      responseType: 'json',
      withCredentials: false
    })
    .then((resp) => {
      if (resp.data.exist) return false;
      else return true;
    })
    .catch((err) => {
      return null;
    });
};
