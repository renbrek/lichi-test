import React from 'react';
import { Inter } from 'next/font/google';
import { Input, TextArea, Button } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex gap-1 min-h-screen flex-col items-center p-16 ${inter.className}`}
    >
      hello
      <Input label="Best input" />
      <TextArea label="Text" />
      <Button type="submit">Sign Up</Button>
      <Button variant="secondary" type="submit">Sign In</Button>
    </main>
  );
}
