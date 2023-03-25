import { memo } from 'react';
import { IAnnouncementBar } from './interfaces/IAnnouncementBar';
const AnnouncementBar = memo(({ title, description }: IAnnouncementBar) => {
  return (
    <div className="announcement-bar">
      <div className="content">
        <div className="frank"></div>
        <div className="announcement-desc">
          <strong>{title}</strong>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
});
export default AnnouncementBar;
