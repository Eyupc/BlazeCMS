import { ChangeEvent, memo } from 'react';
import { IRegisterOption } from '../interfaces/IRegisterOption';

const cnf = require(`../../../../languages/${process.env.NEXT_PUBLIC_CMS_LANGUAGE}`);
const RegisterOption = memo(
  ({ title, description, getOption }: IRegisterOption) => {
    return (
      <>
        <b>{title}</b>
        <em>{description}</em>
        <div className="birthday">
          <select
            name="day"
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              getOption(e.target.value as 'M' | 'F')
            }
            className="register-i birthday-select"
          >
            <option value="M">{cnf.texts.REGISTER_GENDER_MALE}</option>
            <option value="F">{cnf.texts.REGISTER_GENDER_FEMALE}</option>
          </select>
        </div>
      </>
    );
  }
);
export default RegisterOption;
