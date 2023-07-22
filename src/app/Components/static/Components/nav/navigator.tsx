'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { SubCommunity } from './parts/ChildNav/SubCommunity';
import { SubHome } from './parts/ChildNav/SubHome';
import { MainNavigator } from './parts/MainNavigator/MainNavigator';
export default function Navigator() {
  const [showSub, setShowSub] = useState<'y' | 'n'>('n');
  const [showCommunity, setShowCommunity] = useState<'y' | 'n'>('n');
  const [showHome, setShowHome] = useState<'y' | 'n'>('n');
  const [isLoading, setIsLoading] = useState(true);

  const [user, setUser] = useState<{
    avatar: string;
    username: string;
  } | null>(null);

  useEffect(() => {
    new Promise(async (res, rej) => {
      await axios(`${process.env.NEXT_PUBLIC_HOTEL_URL}/api/user/session`, {
        method: 'GET'
      })
        .then((resp) => {
          if ((resp.data.status as boolean) === true)
            setUser({ username: resp.data.username, avatar: resp.data.avatar });
          else setUser(null);

          setIsLoading(false);
        })
        .catch((err) => {
          setUser(null);
        });
    });
  }, []);

  return (
    <>
      <nav>
        <div className="content">
          <ul className="nav">
            {!isLoading ? (
              <MainNavigator
                loggedIn={user !== null ? true : false}
                showHome={(e) => {
                  setShowHome(e);
                  setShowSub(e);
                }}
                showCommunity={(e) => {
                  setShowCommunity(e);
                  setShowSub(e);
                }}
              />
            ) : (
              <></>
            )}
          </ul>
        </div>
      </nav>
      {user != null ? (
        <div id="subnav" active={showSub}>
          <SubHome
            homeActive={showHome}
            showSub={(e) => setShowSub(e)}
            username={user!.username}
            avatar={user!.avatar}
          />
          <SubCommunity
            communityActive={showCommunity}
            showSub={(e) => setShowSub(e)}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
