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
        id="communityMenu"
        active={homeActive}
      >
        <div className="submenu-main">
          <SubItem
            href={'/home'}
            iconImg={`https://www.leet.ws/leet-imaging/avatarimage?figure=${avatar}&head_direction=2&direction=2&size=sml`}
            menuTitle={username}
            menuDesc={'Home page'}
          />
          <SubItem
            href={'/settings'}
            iconImg={'/assets/images/settings_icon.png'}
            menuTitle={'Settings'}
            menuDesc={'User settings'}
          />

          <SubItem
            href={'#'}
            iconImg={'/assets/images/logout.gif'}
            Click={async () => {
              await signOut({
                redirect: false
              });
              router.push('/');
            }}
            menuTitle={'Logout'}
            menuDesc={'End session'}
          />
        </div>
      </div>
    );
  }
);
