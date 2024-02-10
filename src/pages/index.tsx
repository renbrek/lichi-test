import React from 'react';
import { Inter } from 'next/font/google';
import { Input } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-16 ${inter.className}`}
    >
      hello
      <Input label="Best input" />
    </main>
  );
}
