import axios from 'axios';

export const UpdatePassword = async (
  oldPassword: string,
  newpassword: string,
  rePassword: string
): Promise<string[] | boolean> => {
  return await axios('/api/account/password', {
    method: 'POST',
    data: {
      newPassword: newpassword,
      oldPassword: oldPassword,
      rePassword: rePassword
    }
  })
    .then((resp) => {
      if (resp.data.status) {
        return true;
      } else {
        return resp.data.errors;
      }
    })
    .catch((err) => {
      return false;
    });
};
