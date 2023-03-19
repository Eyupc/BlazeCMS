import { memo } from "react";
import { IInformationBox } from "./interfaces/IInformationBox";

export const InformationBox = memo(
  ({ alertTitle, title, description, banner_img }: IInformationBox) => {
    return (
      <div className="rpinfo d-flex direction-row bbgreen">
        <div className="box-inner">
          <div
            className="rp-banner"
            style={{ backgroundImage: `url(${banner_img})` }}
          >
            <div className="rp-category color-green">{alertTitle}</div>
          </div>
          <div className="rp-title">{title}</div>
          <div className="rp-desc">{description}</div>
        </div>
      </div>
    );
  }
);
