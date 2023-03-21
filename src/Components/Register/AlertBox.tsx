import { memo } from 'react';
import '../global.css';
import { IAlertBox } from './interfaces/IAlertBox';

export const AlertBox = memo(({ title, description, text }: IAlertBox) => {
  return (
    <div className="regbox d-flex direction-row bbgreen">
      <div className="box-inner">
        <div className="info-register d-flex">
          <div className="pins"></div>
          <div className="register-text">
            <div className="register-tittle">{title}</div>
            <div className="register-description">{description}</div>
          </div>
        </div>
        <p className="inforeg-desc">{text}</p>
      </div>
    </div>
  );
});
