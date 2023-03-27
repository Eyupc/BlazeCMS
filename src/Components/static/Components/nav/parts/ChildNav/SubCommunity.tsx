import { memo } from 'react';
import { ISubCommunity } from './interfaces/ISubCommunity';
import { SubItem } from './parts/SubItem';

export const SubCommunity = memo(
  ({ communityActive, showSub }: ISubCommunity) => {
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
            menuTitle={'Blaze Staff'}
            menuDesc={'Blaze Staff Team'}
          />
          <SubItem
            href={'/leaderboards'}
            iconImg={'/assets/images/leader.gif'}
            menuTitle={'Leaderboards'}
            menuDesc={'Check who the leaders are!'}
          />

          <SubItem
            href={'#'}
            iconImg={'/assets/images/map.gif'}
            menuTitle={'News'}
            menuDesc={'See the news that are posted!'}
          />
        </div>
      </div>
    );
  }
);
