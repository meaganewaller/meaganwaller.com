import useSWR from 'swr';

import fetcher from '@lib/fetcher';

type UseRepos = {
  data?: ReposData;
  isLoading: boolean;
  isError: Error;
};

const useRepos = (): UseRepos => {
  const { data, error } = useSWR<ReposData>('/api/github/repos', fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useRepos;
