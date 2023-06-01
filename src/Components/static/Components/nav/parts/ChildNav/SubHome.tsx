import cnf from 'lang/en.json';
import { signOut } from 'next-auth/react';
import router from 'next/router';
import { memo } from 'react';
import { ISubHome } from './interfaces/ISubHome';
import { SubItem } from './parts/SubItem';

export const SubHome = memo(
  ({ showSub, homeActive, avatar, username }: ISubHome) => {
    return (
      <div
        className="subItem homeMenu"
        onMouseOver={() => showSub('y')}
        onMouseLeave={() => showSub('n')}
        id="homeMenu"
        active={homeActive}
      >
        <div className="submenu-main">
          <SubItem
            href={'/home'}
            iconImg={`${process.env.NEXT_PUBLIC_IMAGER_URL}?figure=${avatar}&head_direction=2&direction=2&size=sml`}
            menuTitle={username}
            menuDesc={cnf.texts.NAVIGATOR_HOME_DESC}
          />
          <SubItem
            href={'/settings'}
            iconImg={'/assets/images/settings.png'}
            menuTitle={cnf.texts.NAVIGATOR_HOME_SETTINGS_TITLE}
            menuDesc={cnf.texts.NAVIGATOR_HOME_SETTINGS_DESC}
          />

          <SubItem
            href={'#'}
            iconImg={'/assets/images/logout.gif'}
            Click={async () => {
              const logout = await signOut({
                redirect: false,
                callbackUrl: `${process.env.NEXT_PUBLIC_HOTEL_URL}`
              });
              router.push(logout.url);
            }}
            menuTitle={cnf.texts.NAVIGATOR_HOME_LOGOUT_TITLE}
            menuDesc={cnf.texts.NAVIGATOR_HOME_LOGOUT_DESC}
          />
        </div>
      </div>
    );
  }
);
