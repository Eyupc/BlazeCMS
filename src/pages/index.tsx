"use client";
import { Footer } from "@/app/footer/footer";
import { Header } from "@/app/header/header";
import Link from "next/link";
import { getSession, signIn, useSession } from "next-auth/react";

import {
  LegacyRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "../app/global.css";
import router from "next/router";
import { redirect } from "next/navigation";

import axios from "axios";
import Head from "next/head";
export default function Index() {
  const usernameRef: LegacyRef<HTMLInputElement> =
    useRef<HTMLInputElement>(null);
  const passwordRef: LegacyRef<HTMLInputElement> =
    useRef<HTMLInputElement>(null);
  const [avatar, setAvatar] = useState({ look: "" });

  const ShowLoginForm = useCallback((open: boolean) => {
    let element = document.getElementsByClassName(
      "login-modal animate__animated animate__fadeIn"
    ) as HTMLCollectionOf<HTMLElement>;
    if (element[0] != null) {
      if (open) {
        element[0].style.visibility = "visible";
        element[0].style.opacity = "1";
      } else {
        element[0].style.visibility = "hidden";
        element[0].style.opacity = "0";
      }
    }
  }, []);

  const handleSubmit = useCallback(
    async (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      let signed = await signIn("credentials", {
        username: usernameRef.current!.value,
        password: passwordRef.current!.value,
        redirect: false,
      });
      switch (signed?.ok) {
        case true:
          router.push("/home");
          break;
        case false:
          const element = document.getElementsByClassName("error")[0];
          element.innerHTML = "Wrong username/password combination.";
          break;
        default:
          break;
      }
    },
    [usernameRef, passwordRef]
  );

  const changeAvatar = async (e: any) => {
    await axios({
      method: "GET",
      url: `/api/avatar/image?username=${usernameRef.current!.value}`,
      responseType: "json",
    }).then(function (response) {
      if (response.data.status == "OK") {
        avatar.look = response.data.look;
      } else {
        avatar.look = "";
      }
      (
        document.getElementById("userLook") as HTMLImageElement
      ).src = `https://www.leet.ws/leet-imaging/avatarimage?figure=${avatar.look}&head_direction=4&direction=4&size=sml`;
    });
  };

  return (
    <>
      <Head>
        <title>Blaze - Index</title>
      </Head>
      <nav>
        <div className="content">
          <ul className="nav">
            <li className="login" onClick={() => ShowLoginForm(true)}>
              <a href="#login"></a>
              <div className="name">Giriş yap</div>
            </li>
            <li className="register">
              <Link href="/register" />
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
          <div className="login">
            <div className="rpinfo d-flex direction-row bbgreen">
              <div className="box-inner">
                <div
                  className="rp-banner"
                  style={{ backgroundImage: "url(/assets/images/corps.png)" }}
                >
                  <div className="rp-category color-green">BİLGİLENDİRME</div>
                </div>
                <div className="rp-title">Arkadaş edin</div>
                <div className="rp-desc">
                  Bir kullanıcıya tıklayın, arkadaşınız olmalarını isteyen ve
                  beraber etkinlikere katılın, eğlenin odalar yapın ve rol
                  yapın!
                </div>
              </div>
            </div>
            <div className="rpinfo d-flex direction-row bbgreen">
              <div className="box-inner">
                <div
                  className="rp-banner"
                  style={{ backgroundImage: "url(/assets/images/crime.png)" }}
                >
                  <div className="rp-category color-green">BİLGİLENDİRME</div>
                </div>
                <div className="rp-title">Ücretsiz oyna</div>
                <div className="rp-desc">
                  Blaze <b>ücretsiz oynanan</b> bir oyundur, ücretsiz binlerce
                  odayı gezebilir, görevlerini tamamlayabilir, sohbet edebilir
                  ve ödüller kazanabilirsiniz!
                </div>
              </div>
            </div>
            <div className="rpinfo d-flex direction-row bbgreen">
              <div className="box-inner">
                <div
                  className="rp-banner"
                  style={{
                    backgroundImage: "url(/assets/images/community.png",
                  }}
                >
                  <div className="rp-category color-green">BİLGİLENDİRME</div>
                </div>
                <div className="rp-title">Topluluğunu bul</div>
                <div className="rp-desc">
                  Arkadaşlarınla sohbet edip takılmaktan mı hoşlanıyorsun?
                  <b>Blaze grupları, forumları ve rol yapan topluluklar</b>{" "}
                  başlangıç için iyi seçenekler.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="login-modal animate__animated animate__fadeIn"
        style={{ visibility: "hidden", opacity: 0 }}
      >
        <div className="modalbox">
          <div className="userbox d-flex direction-row">
            <div className="info-login d-flex">
              <div className="pins"></div>
              <div className="login-text">
                <div className="login-tittle">BLAZE'YE GİRİŞ YAP</div>
                <div className="login-description">
                  Merhaba, sizleri özledik.. Bizimle oynamak için giriş yapın!
                </div>
              </div>
              <div className="modalclose" onClick={() => ShowLoginForm(false)}>
                x
              </div>
            </div>
            <form id="form" onSubmit={handleSubmit}>
              <div className="login-username">
                <div className="login-user-avatar">
                  <img
                    id="userLook"
                    src={`https://www.leet.ws/leet-imaging/avatarimage?figure=${avatar.look}&head_direction=4&direction=4&size=sml`}
                    className="login-avatar"
                  />
                </div>
                <input
                  className="login-i"
                  placeholder="Kullanıcı adı"
                  type="text"
                  name="username"
                  id="username"
                  ref={usernameRef}
                  onChange={changeAvatar}
                />
              </div>
              <div className="login-password">
                <div className="passico"></div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  ref={passwordRef}
                  className="login-i"
                  placeholder="Parola"
                />
                <div className="error"></div>
              </div>

              <a href="#" target="_blank" className="login-forgot">
                Parolamı unuttum
              </a>
              <button type="submit" id="submit" className="enterhotel">
                GİRİŞ YAP
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
