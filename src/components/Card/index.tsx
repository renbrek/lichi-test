import React, { ComponentProps } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({ weight: ['300', '400', '700', '900'], subsets: ['latin', 'cyrillic'] });

export type CardProps = {
  title?: string
  subtitle?: string
  arcicleCoverSrc?: string
} & ComponentProps<'article'>;

export function Card(props: CardProps): React.ReactNode {
  const {
    title, subtitle, arcicleCoverSrc, className, ...baseProps
  } = props;
  return (
    <article className={clsx('transition-all flex flex-col items border border-gray-300 w-full max-w-[640px] aspect-[1/1] sm:aspect-[4/3] shadow-sm bg-white hover:bg-gray-100 cursor-pointer hover:shadow-xl', merriweather.className, className)} {...baseProps}>
      <div className="p-5">
        {title && <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">{title}</h1>}
        {subtitle && <h3 className="font-light sm:font-normal">{subtitle}</h3>}
      </div>
      {arcicleCoverSrc && (
      <div className="transition-all relative w-full h-full hover:brightness-75 min-h-48">
        <Image fill sizes="100%" src={arcicleCoverSrc} alt="article-cover" objectFit="cover" />
      </div>
      )}
    </article>
  );
}
