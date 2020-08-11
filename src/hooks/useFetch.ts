import useSWR from 'swr';
import api from '../services/api';

export function useFetch<InterfaceData = any>(url: string) {
  const { data, error } = useSWR<InterfaceData>(url, async (url) => {
    const response = await api.get(url);
    return response.data;
  });

  return { data, error };
}
