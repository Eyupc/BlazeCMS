import { Footer } from "@/app/footer/footer";
import { Header } from "@/app/header/header";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {
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
export default function Index() {
  const usernameRef: LegacyRef<HTMLInputElement> = useRef(null);
  const passwordRef: LegacyRef<HTMLInputElement> = useRef(null);
  const repeatPasswordRef: LegacyRef<HTMLInputElement> = useRef(null);
  const emailRef: LegacyRef<HTMLInputElement> = useRef(null);
  const birthRef: LegacyRef<HTMLInputElement> = useRef(null);

  return (
    <>
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
                    ref={usernameRef}
                    value={usernameRef.current?.value}
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
                      value={passwordRef.current?.value}
                      id="password"
                      autoComplete="on"
                    />
                    <b className="mb-05">Parolanı tekrarla</b>
                    <input
                      className="register-i"
                      type="password"
                      name="repeat"
                      id="repeat"
                      ref={repeatPasswordRef}
                      value={repeatPasswordRef.current?.value}
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
                    value={emailRef.current?.value}
                    ref={emailRef}
                    name="email"
                    id="email"
                    autoComplete="on"
                  />
                  <hr />
                  <b>Doğum tarihi</b>
                  <em>
                    Lütfen gerçek doğum tarihini giriniz. Bu bilgiyi şu
                    amaçlarla kullanacağız: Erişiminizi kaybederseniz hesabınızı
                    geri yükleyin. Doğum tarihiniz asla paylaşılmayacaktır.
                  </em>
                  <div className="birthday">
                    <select name="day" className="register-i birthday-select">
                      <option value="01">1</option>
                      <option value="02">2</option>
                      <option value="03">3</option>
                      <option value="04">4</option>
                      <option value="05">5</option>
                      <option value="06">6</option>
                      <option value="07">7</option>
                      <option value="08">8</option>
                      <option value="09">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>
                    <select name="month" className="register-i birthday-select">
                      <option value="01">Ocak</option>
                      <option value="02">Şubat</option>
                      <option value="03">Mart</option>
                      <option value="04">Nisan</option>
                      <option value="05">Mayıs</option>
                      <option value="06">Haziran</option>
                      <option value="07">Temmuz</option>
                      <option value="08">Ağustos</option>
                      <option value="09">Eylül</option>
                      <option value="10">Ekim</option>
                      <option value="11">Kasım</option>
                      <option value="12">Aralık</option>
                    </select>
                    <select name="year" className="register-i birthday-select">
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                      <option value="2012">2012</option>
                      <option value="2011">2011</option>
                      <option value="2010">2010</option>
                      <option value="2009">2009</option>
                      <option value="2008">2008</option>
                      <option value="2007">2007</option>
                      <option value="2006">2006</option>
                      <option value="2005">2005</option>
                      <option value="2004">2004</option>
                      <option value="2003">2003</option>
                      <option value="2002">2002</option>
                      <option value="2001">2001</option>
                      <option value="2000">2000</option>
                      <option value="1999">1999</option>
                      <option value="1998">1998</option>
                      <option value="1997">1997</option>
                      <option value="1996">1996</option>
                      <option value="1995">1995</option>
                      <option value="1994">1994</option>
                      <option value="1993">1993</option>
                      <option value="1992">1992</option>
                      <option value="1991">1991</option>
                      <option value="1990">1990</option>
                      <option value="1989">1989</option>
                      <option value="1988">1988</option>
                      <option value="1987">1987</option>
                      <option value="1986">1986</option>
                      <option value="1985">1985</option>
                      <option value="1984">1984</option>
                      <option value="1983">1983</option>
                      <option value="1982">1982</option>
                      <option value="1981">1981</option>
                      <option value="1980">1980</option>
                      <option value="1979">1979</option>
                      <option value="1978">1978</option>
                      <option value="1977">1977</option>
                      <option value="1976">1976</option>
                      <option value="1975">1975</option>
                      <option value="1974">1974</option>
                      <option value="1973">1973</option>
                      <option value="1972">1972</option>
                      <option value="1971">1971</option>
                      <option value="1970">1970</option>
                      <option value="1969">1969</option>
                      <option value="1968">1968</option>
                      <option value="1967">1967</option>
                      <option value="1966">1966</option>
                      <option value="1965">1965</option>
                      <option value="1964">1964</option>
                      <option value="1963">1963</option>
                      <option value="1962">1962</option>
                      <option value="1961">1961</option>
                      <option value="1960">1960</option>
                      <option value="1959">1959</option>
                      <option value="1958">1958</option>
                      <option value="1957">1957</option>
                      <option value="1956">1956</option>
                      <option value="1955">1955</option>
                      <option value="1954">1954</option>
                      <option value="1953">1953</option>
                      <option value="1952">1952</option>
                      <option value="1951">1951</option>
                      <option value="1950">1950</option>
                      <option value="1949">1949</option>
                      <option value="1948">1948</option>
                      <option value="1947">1947</option>
                      <option value="1946">1946</option>
                      <option value="1945">1945</option>
                      <option value="1944">1944</option>
                      <option value="1943">1943</option>
                      <option value="1942">1942</option>
                      <option value="1941">1941</option>
                      <option value="1940">1940</option>
                      <option value="1939">1939</option>
                      <option value="1938">1938</option>
                      <option value="1937">1937</option>
                      <option value="1936">1936</option>
                      <option value="1935">1935</option>
                      <option value="1934">1934</option>
                      <option value="1933">1933</option>
                      <option value="1932">1932</option>
                      <option value="1931">1931</option>
                      <option value="1930">1930</option>
                      <option value="1929">1929</option>
                      <option value="1928">1928</option>
                      <option value="1927">1927</option>
                      <option value="1926">1926</option>
                      <option value="1925">1925</option>
                      <option value="1924">1924</option>
                      <option value="1923">1923</option>
                      <option value="1922">1922</option>
                      <option value="1921">1921</option>
                      <option value="1920">1920</option>
                      <option value="1919">1919</option>
                      <option value="1918">1918</option>
                      <option value="1917">1917</option>
                      <option value="1916">1916</option>
                      <option value="1915">1915</option>
                      <option value="1914">1914</option>
                      <option value="1913">1913</option>
                      <option value="1912">1912</option>
                      <option value="1911">1911</option>
                      <option value="1910">1910</option>
                      <option value="1909">1909</option>
                      <option value="1908">1908</option>
                      <option value="1907">1907</option>
                      <option value="1906">1906</option>
                      <option value="1905">1905</option>
                      <option value="1904">1904</option>
                      <option value="1903">1903</option>
                      <option value="1902">1902</option>
                      <option value="1901">1901</option>
                      <option value="1900">1900</option>
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
