import { Footer } from "@/app/static/footer/footer";
import { Header } from "@/app/static/header/header";
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
import Navigator from "@/app/static/nav/navigator";
import { Main } from "@/app/static/Main/main";
import { AlertBox } from "@/app/Register/AlertBox";
import { RegisterBox } from "@/app/Register/RegisterBox";
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
      <Main
        child={
          <div className="register">
            <RegisterBox />
            <AlertBox
              title={"BLAZE'YE KATIL!"}
              description={
                "Gençler için dünyanın en büyük çevrimiçi topluluğunun bir parçası olun."
              }
              text={
                "Arkadaşlarınızla sohbet etmeyi ve takılmayı sever misiniz? Blaze Grupları, forumlar ve Rol yapma topluluklarıbaşlamak için harika bir yerdir. Katılın ve sonsuz rol oynamaolasılıklarını keşfedin!"
              }
            />
          </div>
        }
      />
      <Footer />
    </>
  );
}
