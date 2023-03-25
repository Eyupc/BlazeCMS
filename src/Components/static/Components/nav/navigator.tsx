import { ShowLoginForm } from '@/Components/Index/methods/ShowLoginForm';
import axios from 'axios';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import router from 'next/router';
import { useEffect, useState } from 'react';
export default function Navigator() {
  const [showSub, setShowSub] = useState('n');
  const [showCommunity, setShowCommunity] = useState('n');
  const [showHome, setShowHome] = useState('n');
  const [user, setUser] = useState<{
    avatar: string;
    username: string;
  } | null>(null);

  useEffect(() => {
    new Promise(async (res, rej) => {
      await axios('/api/user/session', {
        method: 'GET'
      })
        .then((resp) => {
          if (resp.data.status as Boolean)
            setUser({ username: resp.data.username, avatar: resp.data.avatar });
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
            {user != null ? (
              <>
                <li
                  className="home"
                  menuname="homeMenu"
                  onMouseEnter={(e) => {
                    setShowSub('y');
                    setShowHome('y');
                  }}
                  onMouseLeave={(e) => {
                    setShowSub('n');
                    setShowHome('n');
                  }}
                >
                  <div className="name">Home</div>
                </li>
                <li
                  className="community"
                  onMouseEnter={(e) => {
                    setShowSub('y');
                    setShowCommunity('y');
                  }}
                  onMouseLeave={(e) => {
                    setShowSub('n');
                    setShowCommunity('n');
                  }}
                  menuname="communityMenu"
                >
                  <div className="name">Community</div>
                </li>
                <li className="community" menuname="test">
                  <div className="name">Yardım</div>
                </li>
              </>
            ) : (
              <>
                <li className="login" onClick={() => ShowLoginForm(true)}>
                  <Link href={'/'} />
                  <div className="name">Giriş yap</div>
                </li>
                <li className="register">
                  <Link href="/register" />
                  <div className="name">Hesap oluştur</div>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

      {user != null ? (
        <div id="subnav" active={showSub}>
          <div
            className="subItem communityMenu"
            onMouseOver={() => setShowSub('y')}
            onMouseLeave={() => setShowSub('n')}
            id="communityMenu"
            active={showCommunity}
          >
            <div className="submenu-main">
              <Link href={'/staff'} className="submenu-href">
                <div className="submenu-box">
                  <div
                    className="submenu-ico"
                    style={{
                      backgroundImage: 'url(/assets/images/staff.gif)'
                    }}
                  ></div>
                  <div className="submenu-info">
                    <div className="submenu-name">Blaze Staff</div>
                    <div className="submenu-description">
                      Blaze Personelleri
                    </div>
                  </div>
                </div>
              </Link>
              <Link href={'leaderboards'} className="submenu-href">
                <div className="submenu-box">
                  <div
                    className="submenu-ico"
                    style={{
                      backgroundImage: 'url(/assets/images/leader.gif)'
                    }}
                  ></div>
                  <div className="submenu-info">
                    <div className="submenu-name">Leaderboards</div>
                    <div className="submenu-description">
                      Check the leaderboard list
                    </div>
                  </div>
                </div>
              </Link>
              <a href="citymap.php" className="submenu-href">
                <div className="submenu-box">
                  <div
                    className="submenu-ico"
                    style={{ backgroundImage: 'url(/assets/images/map.gif)' }}
                  ></div>
                  <div className="submenu-info">
                    <div className="submenu-name">City Map</div>
                    <div className="submenu-description">
                      Check out the detailed map of the city
                    </div>
                  </div>
                </div>
              </a>

              {/*  <a href="civilians-online.php" className="submenu-href">
              <div className="submenu-box">
                <div
                  className="submenu-ico"
                  style={{ backgroundImage: 'url(/assets/images/user.gif)' }}
                ></div>
                <div className="submenu-info">
                  <div className="submenu-name">Civilians Online</div>
                  <div className="submenu-description">Active users list</div>
                </div>
              </div>
                </a>*/}
            </div>
          </div>
          <div
            className="subItem homeMenu"
            onMouseOver={() => setShowSub('y')}
            onMouseLeave={() => setShowSub('n')}
            id="communityMenu"
            active={showHome}
          >
            <div className="submenu-main">
              <Link href={'/home'} className="submenu-href">
                <div className="submenu-box">
                  <div
                    className="submenu-ico"
                    style={{
                      backgroundImage: `url(https://www.leet.ws/leet-imaging/avatarimage?figure=${
                        user!.avatar
                      }&head_direction=2&direction=2&size=sml)`,
                      backgroundPositionY: '-35px'
                    }}
                  ></div>
                  <div className="submenu-info">
                    <div className="submenu-name">{user!.username}</div>
                    <div className="submenu-description">Home page</div>
                  </div>
                </div>
              </Link>
              <Link href={'/settings'} className="submenu-href">
                <div className="submenu-box">
                  <div
                    className="submenu-ico"
                    style={{
                      backgroundImage: 'url(/assets/images/settings_icon.png)'
                    }}
                  ></div>
                  <div className="submenu-info">
                    <div className="submenu-name">Settings</div>
                    <div className="submenu-description">User settings</div>
                  </div>
                </div>
              </Link>
              <Link
                href={'#'}
                className="submenu-href"
                onClick={async () => {
                  await signOut({
                    redirect: false
                  });
                  router.push('/');
                }}
              >
                <div className="submenu-box">
                  <div
                    className="submenu-ico"
                    style={{
                      backgroundImage: 'url(/assets/images/logout.gif)'
                    }}
                  ></div>
                  <div className="submenu-info">
                    <div className="submenu-name">Logout</div>
                    <div className="submenu-description">End session</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
