import { IAnnouncementBar } from "./interfaces/IAnnouncementBar";
export function AnnouncementBar({ title, description }: IAnnouncementBar) {
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
}
