import parse from 'html-react-parser';
import { memo } from 'react';
import { IArticleBox } from './interfaces/IArticleBox';

export const ArticleBox = memo(({ data }: IArticleBox) => {
  return (
    <div className="rightArticle">
      <div className="bigArticle">
        <div className="artContent">
          <img src={data.image} alt="Article İmage" id="imgArtic" />
          <h2 className="">
            <strong>{data.title}</strong>
          </h2>
          {parse(data.full_story)}
          <div className="infoFooter">
            <div className="whoPosted">
              <img
                id="postOwner"
                src={`https://www.habbo.com/habbo-imaging/avatarimage?figure=${data.avatar}&action=wlk,wav,crr=667&gesture=sml&direction=2&head_direction=2&size=n&frame=wlk=1&img_format=png`}
                alt="Post Owner"
              />
              <h4>{data.username}</h4>
            </div>
            <div className="userStats">
              <p>
                <strong>Date: </strong>
                {new Date(data.timestamp).toLocaleDateString('nl-NL', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric'
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
