import React from 'react';
import useSWR from 'swr';
import Link from 'next/link';

import fetcher from '@lib/utils/fetcher';
import { Broadcasts } from '@localTypes/subscribers';

const Broadcasts = () => {
  const { data } = useSWR<Broadcasts>(`/api/convertkit/broadcasts`, fetcher);

  return (
    <div className="flex flex-col">
      {!data?.broadcasts && <div className="text-center text-xl font-extra">No issues found 😪 </div>}
      {data?.broadcasts &&
        data?.broadcasts?.map((broadcast) => (
          <Link href="/broadcasts/[id]" key={broadcast.id} as={`/broadcasts/${broadcast.id}`}>
            {broadcast.subject}
          </Link>
        ))}
    </div>
  );
};

export default Broadcasts;
