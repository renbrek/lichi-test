import React from 'react';
import { Article } from '@/stores';
import { Merriweather } from 'next/font/google';
import clsx from 'clsx';
import { Comments } from '@/widgets/Comments';

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin', 'cyrillic'],
});

export type ArticleViewProps = {
  article: Article
};

export function ArticleView(props: ArticleViewProps): React.ReactNode {
  const { article } = props;

  return (
    <div className={clsx('flex flex-col gap-5 ', merriweather.className)}>
      <h1 className="text-3xl font-bold p-6">{article.title}</h1>
      {article.coverImage && <img alt="coverImage" src={article.coverImage} />}
      <h1 className="p-6">{article.body}</h1>
      <div className="p-6">
        <Comments articleId={article.id} comments={article.comments} />
      </div>
    </div>
  );
}
