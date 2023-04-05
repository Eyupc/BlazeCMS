import axios from 'axios';
import { NewsType } from 'database/types/NewsTypes';
import { useEffect, useMemo, useState } from 'react';
import { ILeftArticleBox } from './interfaces/ILeftArticleBox';

export const LeftArticleBox = ({ changeNews }: ILeftArticleBox) => {
  const [news, setNews] = useState<JSX.Element[]>([]);
  const [update, setUpdate] = useState(false); //just toggle
  const [items, setItems] = useState<NewsType[]>([]);

  useEffect(() => {
    (async () => {
      await axios(`http://localhost:3000/api/news/latest`, {
        method: 'GET'
      }).then((res) => {
        if (res.data.status)
          (res.data.news as Array<any>).forEach((e, i) => {
            setItems((oldArr) => [...oldArr, e]);
          });
      });
    })();
  }, []);

  useMemo(async () => {
    for (let i = 0; i <= 2; i++) {
      if (items[news.length + i] == undefined) break;
      setNews((oldArr) => [
        ...oldArr,
        <div key={news.length + (i + 1)} className="leftBox">
          <img src={items[news.length + i].image} />
          <div className="boxContentt">
            <strong className="showMore">
              <h3>
                <div
                  style={{
                    textDecoration: 'none',
                    color: '#000000c9',
                    cursor: 'pointer'
                  }}
                  onClick={() => changeNews(items[news.length + i])}
                >
                  {items[news.length + i].title}
                </div>
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
        <h2 id="lastArt">Latest news</h2>
      </div>
      <div className="leftBoxs">
        {news}
        <div
          className="btnMore"
          onClick={() =>
            items.length != news.length ? setUpdate(!update) : ''
          }
        >
          <strong>Show more</strong>
        </div>
      </div>
    </div>
  );
};
