import { Alert } from "@mui/material";
import { useState } from "react";
import { AlertBox } from "./AlertBox";
import { ICredentials } from "./interfaces/ICredentials";
import { RegisterInput } from "./parts/RegisterInput";
import { RegisterPassword } from "./parts/RegisterPassword";

export function Register() {
  const [credentials, setCredentials] = useState<ICredentials>({
    username: "",
    password: "",
    rePassword: "",
    email: "",
  });

  return (
    <div className="register">
      <div className="regbox d-flex direction-row bbgreen">
        <div className="box-inner">
          <form id="form" onSubmit={handleRegister}>
            {/*ERROR desc*/}

            <RegisterInput
              title={"Kullanıcı adı"}
              description={
                "Gelecekte Blaze'de oturum açmak için bu kullanıcı adını kullanmanız gerekecek. Lütfen geçeri bir kullanıcı adı kullanın."
              }
              type={"username"}
              Change={(val) =>
                setCredentials({ ...credentials, username: val })
              }
            />

            <RegisterPassword
              password={(e) => setCredentials({ ...credentials, password: e })}
              rePassword={(e) =>
                setCredentials({ ...credentials, rePassword: e })
              }
            />
            <RegisterInput
              title={"E-posta"}
              description={
                "Kendi e-posta adresinizi girerek 'parolamı unuttum' işlevini kullanabilirsiniz."
              }
              type={"email"}
              Change={(val) => setCredentials({ ...credentials, email: val })}
            />
            <hr />
            <b>Cinsiyet</b>
            <em>Lütfen cinsiyetinizi seçeniz.</em>
            <div className="birthday">
              <select
                name="day"
                ref={genderRef}
                className="register-i birthday-select"
              >
                <option value="Boy">Erkek</option>
                <option value="Girl">Kiz</option>
              </select>
            </div>
            <hr />
            <fieldset className="fieldset">
              <div className="field">
                <label className="form-label-checkbox">
                  <input
                    id="terms-of-service"
                    type="checkbox"
                    className="form-checkbox"
                    ref={checkbox}
                    required
                  />
                  <span>
                    <strong>
                      <u>
                        Kullanım Şart ve Koşulları, Gizlilik ve Çerez Politikası
                        Şartlarını
                      </u>
                    </strong>{" "}
                    kabul ediyorum.
                  </span>
                </label>
              </div>
            </fieldset>
            <button type="submit" id="submit" className="enterhotel">
              Tamamladık! Hadi, bir avatar yapalım!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
