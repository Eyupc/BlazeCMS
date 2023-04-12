import { ILoginHeader } from '../interfaces/ILoginHeader';
import { ShowLoginForm } from '../methods/ShowLoginForm';

export function LoginHeader({ title, description }: ILoginHeader) {
  return (
    <div className="info-login d-flex">
      <div className="pins"></div>
      <div className="login-text">
        <div className="login-title">{title}</div>
        <div className="login-description">{description}</div>
      </div>
      <div className="modalclose" onClick={() => ShowLoginForm(false)}>
        x
      </div>
    </div>
  );
}
