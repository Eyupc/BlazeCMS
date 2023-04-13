import axios from 'axios';
export const VerifyCaptcha = async (captcha: string): Promise<boolean> => {
  try {
    return await axios(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_SECRET_RECAPTCHA_SITE_KEY}&response=${captcha}`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        method: 'POST'
      }
    )
      .then((resp) => resp.data.success as boolean)
      .catch((err) => false);
  } catch (e) {
    return false;
  }
};
