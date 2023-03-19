"use client";
import { Footer } from "@/app/static/footer/footer";
import { Header } from "@/app/static/header/header";
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
import router from "next/router";
import { redirect } from "next/navigation";

import axios from "axios";
import Head from "next/head";
import "../app/global.css";
import Image from "next/image";
import { AnnouncementBar } from "@/app/Index/AnnouncementBar";
import Navigator from "@/app/static/nav/navigator";
import { ShowLoginForm } from "@/app/Index/methods/ShowLoginForm";
import { InformationBox } from "@/app/Index/InformationBox";
import { Main } from "@/app/static/Main/main";
import { ModalLogin } from "@/app/Index/ModalLogin";
export default function Index() {
  const usernameRef: LegacyRef<HTMLInputElement> =
    useRef<HTMLInputElement>(null);
  const passwordRef: LegacyRef<HTMLInputElement> =
    useRef<HTMLInputElement>(null);
  const [avatar, setAvatar] = useState({ look: "" });

  return (
    <>
      <Head>
        <title>Blaze - Index</title>
      </Head>
      <Navigator loggedIn={false} />
      <Header />
      <AnnouncementBar
        title={"Blaze özel kullanıcılarla dolu bir topluluktur"}
        description={
          "Ücretsiz katıl, arkadaş edin, odanı tasarla ve deneyimin tadınıçıkar!"
        }
      />
      <Main
        child={
          <div className="login">
            <InformationBox
              alertTitle={"BİLGİLENDİRME"}
              title={"Arkadaş edin"}
              description={
                "Bir kullanıcıya tıklayın, arkadaşınız olmalarını isteyen ve beraber etkinlikere katılın, eğlenin odalar yapın ve rol yapın!"
              }
              banner_img={"/assets/images/corps.png"}
            />
            <InformationBox
              alertTitle={"BİLGİLENDİRME"}
              title={"Ücretsiz oyna"}
              description={
                "Blaze ücretsiz oynanan bir oyundur, ücretsiz binlerce odayı gezebilir, görevlerini tamamlayabilir, sohbet edebilir ve ödüller kazanabilirsiniz!"
              }
              banner_img={"/assets/images/crime.png"}
            />
            <InformationBox
              alertTitle={"BİLGİLENDİRME"}
              title={"Topluluğunu bul"}
              description={
                "Arkadaşlarınla sohbet edip takılmaktan mı hoşlanıyorsun? Blaze grupları, forumları ve rol yapan topluluklar başlangıç için iyi seçenekler."
              }
              banner_img={"assets/images/community.png"}
            />
          </div>
        }
      />
      <ModalLogin />
      <Footer></Footer>
    </>
  );
}
