import { ShowLoginForm } from '@/app/Components/Index/methods/ShowLoginForm';
import { memo } from 'react';
import cnf from '../../../../../../../../cms-config.json';
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
              title={cnf.texts.NAVIGATOR_HOME_TITLE}
              menuName={'homeMenu'}
              Update={(e) => showHome(e)}
            />
            <ListItem
              name={'community'}
              title={cnf.texts.NAVIGATOR_COMMUNITY_TITLE}
              menuName={'communityMenu'}
              Update={(e) => showCommunity(e)}
            />
          </>
        ) : (
          <>
            <ListItem
              name={'login'}
              title={cnf.texts.NAVIGATOR_LOGIN_TITLE}
              menuName={'logIn'}
              Click={() => ShowLoginForm(true)}
              goTo={'/'}
            />
            <ListItem
              name={'register'}
              title={cnf.texts.NAVIGATOR_REGISTER_TITLE}
              menuName={'register'}
              goTo={'/register'}
            />
          </>
        )}
        <ListItem
          name={'help'}
          title={cnf.texts.NAVIGATOR_HELP_TITLE}
          menuName={'help'}
          goTo={'/help'}
        />
      </>
    );
  }
);
