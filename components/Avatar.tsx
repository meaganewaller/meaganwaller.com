import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

//import AvatarImage from '../../public/static/images/avatar.svg';

type Props = {
  large?: boolean;
} & React.HTMLAttributes<HTMLAnchorElement>;

export const Avatar = ({ large = false, className, ...props }: Props) => {
  return (
    <Link href="/" aria-label="Home" className={clsx(className, 'pointer-events-auto')} {...props}>
      <Image
        src={`/static/images/avatar.svg`}
        alt=""
        width={large ? 64 : 36}
        height={large ? 64 : 36}
        sizes={large ? '4rem' : '2.25rem'}
        className={clsx(
          'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
          large ? 'h-16 w-16' : 'h-9 w-9',
        )}
        priority
      />
    </Link>
  );
};
