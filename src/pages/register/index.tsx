import { Footer } from "@/app/footer/footer";
import { Header } from "@/app/header/header";
import { Alert } from "@mui/material";
import axios from "axios";
import DatabaseManager from "database/DatabaseManager";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import router from "next/router";
import "../../app/global.css";
import {
  BaseSyntheticEvent,
  ChangeEvent,
  LegacyRef,
  RefObject,
  use,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import "../../app/global.css";
import { AnnouncementBar } from "@/app/Index/AnnouncementBar";
import Navigator from "@/app/nav/navigator";
export default function Index(ctx: any) {
  const regexUsername = new RegExp("(^[a-zA-Z0-9-=?!@:.]{1,19}$)");
  const [username, setUsername] = useState("");
  const passwordRef: LegacyRef<HTMLInputElement> = useRef(null);
  const rePassword: LegacyRef<HTMLInputElement> = useRef(null);
  const emailRef: LegacyRef<HTMLInputElement> = useRef(null);
  const genderRef: LegacyRef<HTMLSelectElement> = useRef(null);
  const checkbox: LegacyRef<HTMLInputElement> = useRef(null);
  const [unameValid, setUnameValid] = useState<boolean | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const handleRegister = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    if (!checkbox.current?.checked) return;
    await axios("/api/auth/register", {
      method: "POST",
      withCredentials: true,
      data: {
        username: username,
        password: passwordRef.current?.value,
        rePassword: rePassword.current?.value,
        mail: emailRef.current?.value,
        gender: genderRef.current?.value,
      },
    }).then(async (resp) => {
      if (resp.data.status) {
        const signed = await signIn("credentials", {
          username: username,
          password: passwordRef.current?.value,
          redirect: false,
        });
        switch (signed?.ok) {
          case true:
            router.push("/home");
            break;
          default:
            break;
        }
      } else {
        setErrors(resp.data.errors);
      }
    });
  };

  const checkUsername = async (name: string) => {
    if (!regexUsername.test(name)) {
      // is max 18 characters long, is an allowed username
      setUnameValid(false);
      return;
    }

    setUnameValid(
      await axios
        .get(`/api/utils/username/${name}`, {
          method: "GET",
          responseType: "json",
          withCredentials: false,
        })
        .then((resp) => {
          if (resp.data.exist == true) return false;
          else return true;
        })
        .catch((err) => {
          return null;
        })
    );
  };

  const onUsernameChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  return (
    <>
      <Head>
        <title>Blaze - Register</title>
      </Head>
      <Navigator loggedIn={false} />
      <Header />
      <AnnouncementBar
        title={"Blaze özel kullanıcılarla dolu bir topluluktur"}
        description={
          "Ücretsiz katıl, arkadaş edin, odanı tasarla ve deneyimin tadınıçıkar!"
        }
      />
      <div className="content mt-2 mb-2">
        <div className="section">
          <div className="register">
            <div className="regbox d-flex direction-row bbgreen">
              <div className="box-inner">
                <form id="form" onSubmit={handleRegister}>
                  {errors.length > 0 ? (
                    <Alert
                      severity="error"
                      style={{ margin: ".5rem .5rem .5rem 0" }}
                    >
                      {errors.map((e, i) => (
                        <div key={i}>
                          {e}
                          <br />
                        </div>
                      ))}
                    </Alert>
                  ) : (
                    <></>
                  )}
                  <b>Kullanıcı adı</b>
                  <em>
                    Gelecekte Blaze'de oturum açmak için bu kullanıcı adını
                    kullanmanız gerekecek. Lütfen geçeri bir kullanıcı adı
                    kullanın.
                  </em>
                  <input
                    className="register-i"
                    type="text"
                    name="username"
                    id="username"
                    onKeyDown={(e) => {
                      if (e.code == "Space") e.preventDefault();
                    }}
                    style={
                      unameValid != null
                        ? unameValid
                          ? { border: "1px solid green" }
                          : { border: "1px solid red" }
                        : {}
                    }
                    onChange={(e) => {
                      onUsernameChange(e);
                    }}
                    onBlur={async () => await checkUsername(username)}
                    autoComplete="on"
                    required
                  />
                  <div className="register-password-main">
                    <b>Parola</b>
                    <em>En az 6 karakter kullanın.</em>
                    <input
                      className="register-i mb-08"
                      type="password"
                      name="password"
                      ref={passwordRef}
                      id="password"
                      autoComplete="on"
                      required
                    />
                    <b className="mb-05">Parolanı tekrarla</b>
                    <input
                      className="register-i"
                      type="password"
                      name="repeat"
                      id="repeat"
                      ref={rePassword}
                      autoComplete="on"
                      required
                    />
                  </div>
                  <b>E-posta</b>
                  <em>
                    Kendi e-posta adresinizi girerek "parolamı unuttum" işlevini
                    kullanabilirsiniz.
                  </em>
                  <input
                    className="register-i"
                    type="email"
                    ref={emailRef}
                    name="email"
                    id="email"
                    autoComplete="on"
                    required
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
                              Kullanım Şart ve Koşulları, Gizlilik ve Çerez
                              Politikası Şartlarını
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
            <div className="regbox d-flex direction-row bbgreen">
              <div className="box-inner">
                <div className="info-register d-flex">
                  <div className="pins"></div>
                  <div className="register-text">
                    <div className="register-tittle">BLAZE'YE KATIL!</div>
                    <div className="register-description">
                      Gençler için dünyanın en büyük çevrimiçi topluluğunun bir
                      parçası olun.
                    </div>
                  </div>
                </div>
                <p className="inforeg-desc">
                  Arkadaşlarınızla sohbet etmeyi ve takılmayı sever misiniz?{" "}
                  <strong>
                    Blaze Grupları, forumlar ve Rol yapma toplulukları
                  </strong>{" "}
                  başlamak için harika bir yerdir. Katılın ve sonsuz rol oynama
                  olasılıklarını keşfedin!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
