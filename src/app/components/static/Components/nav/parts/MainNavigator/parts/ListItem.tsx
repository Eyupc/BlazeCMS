import Link from 'next/link';
import { memo } from 'react';
import { IListItem } from '../interfaces/IListItem';

export const ListItem = memo(
  ({ name, menuName, title, goTo, Update, Click }: IListItem) => {
    return (
      <li
        className={name}
        menuname={menuName}
        onMouseEnter={(e) => {
          if (Update != undefined) Update('y');
        }}
        onMouseLeave={(e) => {
          if (Update != undefined) Update('n');
        }}
        onClick={(e) => {
          if (Click != undefined) Click();
        }}
      >
        {goTo != undefined ? <Link href={goTo} /> : <></>}
        <div className="name">{title}</div>
      </li>
    );
  }
);
