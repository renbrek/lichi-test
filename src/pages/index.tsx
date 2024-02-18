import React from 'react';
import { Inter } from 'next/font/google';
import { useArticlesStore } from '@/stores';
import { ArticleFeed } from '@/widgets';
import { CreateArticleButton } from '@/components/CreateArticleButton';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const articlesStore = useArticlesStore();

  return (
    <main
      className={`flex min-h-screen gap-10 flex-col items-center p-2 ${inter.className}`}

    >
      <h1 className="text-6xl my-10 font-extralight">Lichi Blog</h1>
      <CreateArticleButton />
      <ArticleFeed articles={articlesStore.articles} />
    </main>
  );
}
