import { memo } from 'react';
import { IRegisterCheckbox } from '../interfaces/IRegisterCheckbox';

const RegisterCheckbox = memo(({ description }: IRegisterCheckbox) => {
  return (
    <fieldset className="fieldset">
      <div className="field">
        <label className="form-label-checkbox">
          <input
            id="terms-of-service"
            type="checkbox"
            className="form-checkbox"
            required
          />
          <span>
            <strong>
              <u>{description}</u>
            </strong>
          </span>
        </label>
      </div>
    </fieldset>
  );
});
export default RegisterCheckbox;
