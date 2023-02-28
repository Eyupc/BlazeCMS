"use client";
import { Footer } from "@/app/footer/footer";
import { Header } from "@/app/header/header";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import "../app/global.css";
export default function Index() {
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

  return (
    <>
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
            <form id="form">
              <div className="login-username">
                <div className="login-user-avatar">
                  <img
                    src="https://www.habbo.com.tr/habbo-imaging/avatarimage?user=OS&amp;headonly=0&amp;size=b&amp;gesture=sml&amp;direction=4&amp;head_direction=4&amp;action=std"
                    className="login-avatar"
                  />
                </div>
                <input
                  className="login-i"
                  placeholder="Kullanıcı adı"
                  type="text"
                  name="username"
                  id="username"
                />
                <div className="error"></div>
              </div>
              <div className="login-password">
                <div className="passico"></div>
                <input
                  type="password"
                  name="password"
                  id="password"
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
