import Link from 'next/link';
import { memo } from 'react';
import { ISubItem } from '../interfaces/ISubItem';
import { useRouter } from 'next/navigation';

export const SubItem = memo(
  ({ href, iconImg, menuTitle, menuDesc, Click }: ISubItem) => {
    const router = useRouter();
    return (
      <Link
        href={href}
        onClick={() => {
          if (Click != undefined) Click();
        }}
        className="submenu-href"
      >
        <div className="submenu-box">
          <div
            className="submenu-ico"
            style={{
              backgroundImage: `url(${iconImg})`
            }}
          ></div>
          <div className="submenu-info">
            <div className="submenu-name">{menuTitle}</div>
            <div className="submenu-description">{menuDesc}</div>
          </div>
        </div>
      </Link>
    );
  }
);
