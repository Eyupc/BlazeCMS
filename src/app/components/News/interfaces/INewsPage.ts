import { NewsType } from '../../../../../database/types/NewsTypes';

export interface INewsPage {
  news: NewsType | null;
}
