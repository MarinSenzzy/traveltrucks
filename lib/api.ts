import { FiltersResponseDto } from '@/types/camper';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://campers-api.goit.study',
  headers: {
    'content-type': 'application/json',
  },
});
export const getAvailableFilters = async (): Promise<FiltersResponseDto> => {
  const { data } = await api.get<FiltersResponseDto>('/campers/filters');
  return data;
};
