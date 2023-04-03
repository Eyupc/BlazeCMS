import AnnouncementBar from '@/Components/static/Components/AnnouncementBar/AnnouncementBar';
import { Footer } from '@/Components/static/Components/footer/footer';
import Header from '@/Components/static/Components/header/header';
import Main from '@/Components/static/Components/Main/main';
import Navigator from '@/Components/static/Components/nav/navigator';
import DatabaseManager from 'database/DatabaseManager';
import { NewsType } from 'database/types/NewsTypes';
import parse from 'html-react-parser';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useMemo } from 'react';
import '/styles/styles.css';

export default function NewsPage(props: INewsPage) {
  const getLeftNews = useMemo(() => {
    return props.news.map((u, i) => {
      return (
        <div className="leftBox">
          <img src={u.image} />
          <div className="boxContentt">
            <strong className="showMore">
              <h3>{u.title}</h3>
            </strong>
            <p>{u.description}</p>
          </div>
        </div>
      );
    });
  }, []);
  return (
    <>
      <Head>
        <title>{'Blaze news'}</title>
      </Head>
      <Navigator />
      <Header />
      <AnnouncementBar title={'test'} description={'test2'} />
      <Main
        child={
          <div className="articlesPages">
            <div className="leftArticle">
              <div className="infoHead">
                <h2 id="lastArt">Son Haberler</h2>
              </div>
              <div className="leftBoxs">
                {getLeftNews}

                <a href="#" className="">
                  <strong>Daha fazla haber</strong>
                </a>
              </div>
            </div>

            <div className="rightArticle">
              <div className="bigArticle">
                <div className="artContent">
                  <img
                    src="https://images.habbo.com/web_images/habbo-web-articles/lpromo_mar21_gen.png"
                    alt="Article İmage"
                    id="imgArtic"
                  />
                  <h2 className="">
                    <strong>{props.news[0].title}</strong>
                  </h2>
                  {parse(props.news[0].full_story)}
                  <div className="infoFooter">
                    <div className="whoPosted">
                      <img
                        id="postOwner"
                        src={`https://www.habbo.com/habbo-imaging/avatarimage?figure=${props.news[0].avatar}&action=wlk,wav,crr=667&gesture=sml&direction=2&head_direction=2&size=n&frame=wlk=1&img_format=png`}
                        alt="Post Owner"
                      />
                      <h4>{props.news[0].username}</h4>
                    </div>
                    <div className="userStats">
                      <strong>Haber tarihi: </strong>
                      {new Date(props.news[0].timestamp).toLocaleDateString(
                        'nl-NL',
                        {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric'
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />
      <Footer />
    </>
  );
}

type INewsPage = {
  news: NewsType[];
};
export async function getServerSideProps(
  ctx: GetServerSidePropsContext
): Promise<{ props: INewsPage }> {
  const result = await DatabaseManager.GetInstance().NewsQueries.getLatestNews(
    5
  );

  return {
    props: {
      news: JSON.parse(JSON.stringify(result.news))
    }
  };
}
