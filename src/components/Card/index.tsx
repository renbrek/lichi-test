import React from 'react';
import clsx from 'clsx';
import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin', 'cyrillic'],
});

export type CardProps = {
  title?: string
  subtitle?: string
  coverImageSrc?: string
} & React.ComponentProps<'article'>;

export function Card(props: CardProps): React.ReactNode {
  const {
    title,
    subtitle,
    coverImageSrc,
    className,
    ...baseProps
  } = props;
  return (
    <article
      className={clsx(
        'transition-all flex flex-col items border border-gray-300 w-full max-w-[640px]  shadow-sm bg-white hover:bg-gray-100 cursor-pointer hover:shadow-xl',
        merriweather.className,
        className,
      )}
      {...baseProps}
    >
      <div className="p-5">
        {title && <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{title}</h1>}
        {subtitle
          && (
            <h3 className="font-light mt-3 sm:mt-5 sm:font-normal">
              {subtitle.substring(0, 200)}
              {' '}
              {subtitle.length >= 200 && '...'}
            </h3>
          )}
      </div>
      {coverImageSrc && (
        <img src={coverImageSrc} />
      )}
    </article>
  );
}
