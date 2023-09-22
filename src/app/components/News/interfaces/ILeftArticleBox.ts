import { NewsType } from '../../../../../database/types/NewsTypes';

export interface ILeftArticleBox {
  changeNews: (news: NewsType) => void;
}
