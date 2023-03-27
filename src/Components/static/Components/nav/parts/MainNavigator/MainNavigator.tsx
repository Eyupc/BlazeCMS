import '@/app/global.css';
import { ShowLoginForm } from '@/Components/Index/methods/ShowLoginForm';
import { memo } from 'react';
import { IMainNavigator } from './interfaces/IMainNavigator';
import { ListItem } from './parts/ListItem';
export const MainNavigator = memo(
  ({ loggedIn, showCommunity, showHome }: IMainNavigator) => {
    return (
      <>
        {loggedIn ? (
          <>
            <ListItem
              name={'home'}
              title={'Home'}
              menuName={'homeMenu'}
              Update={(e) => showHome(e)}
            />
            <ListItem
              name={'community'}
              title={'Community'}
              menuName={'communityMenu'}
              Update={(e) => showCommunity(e)}
            />

            <ListItem name={'community'} title={'Help'} menuName={'test'} />
          </>
        ) : (
          <>
            <ListItem
              name={'login'}
              title={'Log in'}
              menuName={'LogIn'}
              Click={() => ShowLoginForm(true)}
              href={'/'}
            />
            <ListItem
              name={'register'}
              title={'Register'}
              menuName={'register'}
              href={'/register'}
            />
          </>
        )}
      </>
    );
  }
);
