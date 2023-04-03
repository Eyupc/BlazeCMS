import axios from 'axios';
import { NewsType } from 'database/types/NewsTypes';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

export const LeftArticleBox = () => {
  const [news, setNews] = useState<JSX.Element[]>([]);
  const [update, setUpdate] = useState(false); //just toggle
  const [items, setItems] = useState<NewsType[]>([]);

  useEffect(() => {
    (async () => {
      await axios(`http://localhost:3000/api/news/latest`, {
        method: 'GET'
      }).then((res) => {
        (res.data.news as Array<any>).forEach((e, i) => {
          setItems((oldArr) => [...oldArr, e]);
        });
      });
    })();
  }, []);

  useMemo(async () => {
    for (let i = 0; i <= 1; i++) {
      if (items[news.length + i] == undefined) break;
      setNews((oldArr) => [
        ...oldArr,
        <div key={news.length + (i + 1)} className="leftBox">
          <img src={items[news.length + i].image} />
          <div className="boxContentt">
            <strong className="showMore">
              <h3>
                <Link
                  style={{ textDecoration: 'none', color: '#000000c9' }}
                  href={`/news/${items[news.length + i].id}`}
                >
                  {items[news.length + i].title}
                </Link>
              </h3>
            </strong>
            <p>{items[news.length + i].description}</p>
          </div>
        </div>
      ]);
    }
  }, [update, items]);

  return (
    <div className="leftArticle">
      <div className="infoHead">
        <h2 id="lastArt">Son Haberler</h2>
      </div>
      <div className="leftBoxs">
        {news}
        <div className="btnMore" onClick={() => setUpdate(!update)}>
          <strong>Daha fazla haber</strong>
        </div>
      </div>
    </div>
  );
};
