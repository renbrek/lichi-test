import React from 'react';
import { Inter } from 'next/font/google';
import { useArticlesStore } from '@/stores';
import { ArticleFeed } from '@/widgets';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const articlesStore = useArticlesStore();

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-2 ${inter.className}`}

    >
      <h1 className="text-6xl mt-10 mb-20">Lichi Blog</h1>
      <ArticleFeed articles={articlesStore.articles} />
    </main>
  );
}
