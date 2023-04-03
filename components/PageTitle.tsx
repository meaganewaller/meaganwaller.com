import clsx from 'clsx';

import type { PropsWithChildren } from 'react';

export const PageTitle = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
  return (
    <h1
      className={clsx(
        className,
        'text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl',
      )}
    >
      {children}
    </h1>
  );
};
