import axios from 'axios';

export const ChangeAvatar = async (username: string) => {
  return await axios({
    method: 'GET',
    url: `/api/utils/avatar/${username}`,
    responseType: 'json'
  })
    .then(function (response) {
      if (response.data.status) {
        return response.data.look;
      } else {
        return '';
      }
    })
    .catch((err) => {
      return '';
    });
};
