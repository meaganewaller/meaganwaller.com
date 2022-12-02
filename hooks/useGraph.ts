import useSWR from 'swr';

import fetcher from '@lib/fetcher';

type UseGraph = {
  data?: GraphData;
  isLoading: boolean;
  isError: Error;
};

const useGraph = (): UseGraph => {
  const { data, error } = useSWR<GraphData>('/api/github/graph', fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGraph;
