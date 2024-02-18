import React from 'react';
import { Article } from '@/stores';
import { Card } from '@/components/Card';

export type ArticleFeedProps = {
  articles: Article[]
};

export function ArticleFeed(props: ArticleFeedProps): React.ReactNode {
  const { articles } = props;
  return (
    <div className="h-full flex flex-col gap-2">
      {articles.map((article) => (
        <Card
          key={article.id}
          title={article.title}
          subtitle={article.body}
          coverImageSrc={article.coverImage}
        />
      ))}
    </div>
  );
}
