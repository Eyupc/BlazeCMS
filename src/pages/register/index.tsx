import { Footer } from "@/app/footer/footer";
import { Header } from "@/app/header/header";
import axios from "axios";
import DatabaseManager from "database/DatabaseManager";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
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
export default function Index(ctx: any) {
  const regexUsername = new RegExp("(^[a-zA-Z0-9-=?!@:.]{1,19}$)");
  const [username, setUsername] = useState("");
  const passwordRef: LegacyRef<HTMLInputElement> = useRef(null);
  const rePassword: LegacyRef<HTMLInputElement> = useRef(null);
  const emailRef: LegacyRef<HTMLInputElement> = useRef(null);
  const genderRef: LegacyRef<HTMLSelectElement> = useRef(null);

  const [unameValid, setUnameValid] = useState<boolean | null>(null);

  const handleRegister = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
  };

  const checkUsername = async (name: string) => {
    if (!regexUsername.test(name)) {
      // is max 18 characters long, is an allowed username
      setUnameValid(false);
      return;
    }
    console.log(regexUsername.test(name));

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
      <nav>
        <div className="content">
          <ul className="nav">
            <li className="login">
              <Link href={"/"}></Link>
              <div className="name">Giriş yap</div>
            </li>
            <li className="register">
              <div className="name">Hesap oluştur</div>
            </li>
          </ul>
        </div>
      </nav>
      <Header></Header>
      <div className="announcement-bar">
        <div className="content">
          <div className="frank"></div>
          <div className="announcement-desc">
            <strong>Blaze özel kullanıcılarla dolu bir topluluktur.</strong>
            <p>
              Ücretsiz katıl, arkadaş edin, odanı tasarla ve deneyimin tadını
              çıkar!
            </p>
          </div>
        </div>
      </div>
      <div className="content mt-2 mb-2">
        <div className="section">
          <div className="register">
            <div className="regbox d-flex direction-row bbgreen">
              <div className="box-inner">
                <form id="form">
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
                    />
                    <b className="mb-05">Parolanı tekrarla</b>
                    <input
                      className="register-i"
                      type="password"
                      name="repeat"
                      id="repeat"
                      ref={rePassword}
                      autoComplete="on"
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
                  <button
                    type="submit"
                    id="submit"
                    className="enterhotel"
                    onClick={(e) => handleRegister(e)}
                  >
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
