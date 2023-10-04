'use client';
import { LeftArticleBox } from '@/app/components/News/LeftArticleBox';
import { ArticleBox } from '@/app/components/News/ArticleBox';
import { INewsPage } from '@/app/components/News/interfaces/INewsPage';
import { useState } from 'react';

export default function DynamicNewsComponent(data: INewsPage) {
  const [news, setNews] = useState(data.news!);
  return (
    <div className="articlesPages">
      <LeftArticleBox changeNews={(ns) => setNews(ns)} />
      <ArticleBox key={data.news?.id!} data={news} />
    </div>
  );
}
