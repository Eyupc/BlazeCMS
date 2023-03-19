import router from "next/router";
import {
  FormEvent,
  LegacyRef,
  memo,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import { ChangeAvatar } from "./methods/ChangeAvatar";
import { ShowLoginForm } from "./methods/ShowLoginForm";
import { TryoToLogin } from "./methods/TryToLogin";
import { InputName } from "./parts/InputName";
import { InputPassword } from "./parts/InputPassword";
import { LoginHeader } from "./parts/LoginHeader";

export const ModalLogin = memo(() => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [error, setError] = useState("");

  const HandleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const loggedIn = await TryoToLogin(username, password);
      switch (loggedIn) {
        case true:
          router.push("/home");
          break;
        default:
          setError("Wrong username/password combination.");
          break;
      }
    },
    [username, password]
  );
  return (
    <div
      className="login-modal animate__animated animate__fadeIn"
      style={{ visibility: "hidden", opacity: 0 }}
    >
      <div className="modalbox">
        <div className="userbox d-flex direction-row">
          <LoginHeader
            title={"BLAZE'YE GİRİŞ YAP"}
            description={
              "Merhaba, sizleri özledik.. Bizimle oynamak için giriş yapın!"
            }
          />
          <form id="form" onSubmit={HandleSubmit}>
            <InputName Change={(uname) => setUsername(uname)} />
            <InputPassword Change={(password) => setPassword(password)} />
            <div className="error">{error}</div>
            <a href="#" target="_blank" className="login-forgot">
              Parolamı unuttums
            </a>
            <button type="submit" id="submit" className="enterhotel">
              GİRİŞ YAP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});
