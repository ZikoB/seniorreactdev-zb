import { useQuery } from 'react-query';
import { axiosClient } from '../../lib/axios';

export const useUser = () => {
  return useQuery('user', async () => {
    const { data } = await axiosClient.get('users');

    return data[0];
  });
};
