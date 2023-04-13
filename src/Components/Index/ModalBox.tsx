import { memo, useState } from 'react';
import { StringToBool } from 'utils/StringToBool';
import ModalLogin from './ModalLogin';
import ResetPassword from './ResetPassword';
const ModalBox = memo(() => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      className="login-modal animate__animated animate__fadeIn"
      style={{ visibility: 'hidden', opacity: 0 }}
    >
      <div className="modalbox">
        <div className="userbox d-flex direction-row">
          {isLogin ? (
            <ModalLogin changePage={() => setIsLogin(false)} />
          ) : StringToBool(String(process.env.NEXT_PUBLIC_EMAIL_ENABLED)) ==
            true ? (
            <ResetPassword changePage={() => setIsLogin(true)} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
});
export default ModalBox;
