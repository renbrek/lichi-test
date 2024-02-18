import React, { useEffect, useMemo, useState } from 'react';
import { Article } from '@/stores';
import { Card } from '@/components/ui/Card';
import { Modal } from '@/components/ui/Modal';
import { useRouter } from 'next/router';
import { ArticleView } from '@/widgets/ArticleView';

export type ArticleFeedProps = {
  articles: Article[]
};

export function ArticleFeed(props: ArticleFeedProps): React.ReactNode {
  const { articles } = props;
  const router = useRouter();
  const [openedArticleId, setOpenedArticleId] = useState<string>();

  const openedArticle = useMemo(() => {
    if (!openedArticleId) return undefined;
    return articles.find((article) => article.id === openedArticleId);
  }, [openedArticleId, articles]);

  useEffect(() => {
    setOpenedArticleId(router.query.articleId?.toString() ?? '');
  }, [router.query]);

  return (
    <>
      <div className="h-full flex flex-col gap-4">
        {articles.slice()
          .reverse()
          .map((article) => (
            <Card
              onClick={() => router.push(`/?articleId=${article.id}`, undefined, { shallow: true })}
              key={article.id}
              title={article.title}
              subtitle={article.body}
              coverImageSrc={article.coverImage}
            />
          ))}
      </div>
      {openedArticle && (
        <Modal
          isOpen={!!openedArticleId}
          onClose={() => {
            router.replace('/', undefined, { shallow: true });
          }}
          className="px-0 py-12"
        >
          <ArticleView
            article={openedArticle}
          />
        </Modal>
      )}
    </>
  );
}
