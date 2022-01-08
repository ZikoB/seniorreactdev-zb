import { useQuery } from 'react-query';
import { axiosClient } from '../../lib/axios';

export const usePosts = () => {
  return useQuery('posts', async () => {
    const { data } = await axiosClient.get('posts');

    return [data[0], data[1]];
  });
};
