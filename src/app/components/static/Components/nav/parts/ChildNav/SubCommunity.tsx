import { memo } from 'react';
import cnf from '../../../../../../../../cms-config.json';
import { ISubCommunity } from './interfaces/ISubCommunity';
import { SubItem } from './parts/SubItem';
import { useRouter } from 'next/navigation';

export const SubCommunity = memo(
  ({ communityActive, showSub }: ISubCommunity) => {
    const router = useRouter();
    return (
      <div
        className="subItem communityMenu"
        onMouseOver={() => showSub('y')}
        onMouseLeave={() => showSub('n')}
        id="communityMenu"
        active={communityActive}
      >
        <div className="submenu-main">
          <SubItem
            href={'/staff'}
            iconImg={'/assets/images/staff.gif'}
            menuTitle={cnf.texts.NAVIGATOR_COMMUNITY_STAFF_TITLE}
            menuDesc={cnf.texts.NAVIGATOR_COMMUNITY_STAFF_DESC}
          />
          <SubItem
            href={'/leaderboards'}
            iconImg={'/assets/images/leader.gif'}
            menuTitle={cnf.texts.NAVIGATOR_COMMUNITY_LEADER_TITLE}
            menuDesc={cnf.texts.NAVIGATOR_COMMUNITY_LEADER_DESC}
          />

          <SubItem
            href={'/news'}
            iconImg={'/assets/images/news.gif'}
            menuTitle={cnf.texts.NAVIGATOR_COMMUNITY_NEWS_TITLE}
            menuDesc={cnf.texts.NAVIGATOR_COMMUNITY_NEWS_DESC}
          />
        </div>
      </div>
    );
  }
);
