'use client';
import { INewsPage } from '@/app/components/News/interfaces/INewsPage';
import { LeftArticleBox } from '@/app/components/News/LeftArticleBox';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import 'styles/styles.css';

export default function NewsPageStatic(props: INewsPage) {
  const router = useRouter();

  useEffect(() => {
    if (props.news != null) router.push(`/news/${props.news!.id}`);
  }, []);

  return (
    <div className="articlesPages">
      <LeftArticleBox changeNews={() => console.log()} />
    </div>
  );
}
