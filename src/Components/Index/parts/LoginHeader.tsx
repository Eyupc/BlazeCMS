import { ShowLoginForm } from '../methods/ShowLoginForm';

export function LoginHeader({ title, description }) {
  return (
    <div className="info-login d-flex">
      <div className="pins"></div>
      <div className="login-text">
        <div className="login-title">BLAZE'YE GİRİŞ YAP</div>
        <div className="login-description">
          Merhaba, sizleri özledik.. Bizimle oynamak için giriş yapın!
        </div>
      </div>
      <div className="modalclose" onClick={() => ShowLoginForm(false)}>
        x
      </div>
    </div>
  );
}
