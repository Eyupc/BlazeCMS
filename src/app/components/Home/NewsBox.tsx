import Link from 'next/link';
import { memo } from 'react';
import { INewsBox } from './interfaces/INewsBox';

export const NewsBox = memo((props: INewsBox) => {
  const getItems = () => {
    return props.news.map((u, i) => {
      return (
        <div key={i} className={'newsItem'}>
          <div
            className={'newsHeader'}
            style={{
              backgroundImage: `url(${u.image})`
            }}
          ></div>
          <div className={'newsDetails'}>
            <Link
              style={{ textDecoration: 'none', color: '#000' }}
              href={`/news/${u.id}`}
            >
              <div className={'newsTitle'}>{u.title}</div>
            </Link>
            <div className={'newsDesc'}>{u.description}</div>
          </div>
          <div className={'newsFooter'}>
            <div
              className={'newsAvatar'}
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGER_URL}?figure=${u.avatar}&head_direction=3&headonly=true&img_format=png)`
              }}
            />
            <div className={'newsAuthor'}>- {u.username}</div>
            <div className={'newsDate'}>
              {new Date(u.timestamp).toLocaleDateString('nl-NL', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
              })}
            </div>
          </div>
        </div>
      );
    });
  };
  return <div className={'newsBox'}>{getItems()}</div>;
});
