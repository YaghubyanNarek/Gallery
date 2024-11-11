import axios from 'axios';
import { IExactPhoto, PexelsApiResponse, Photo } from '../types/types';

export const fetchPhotos = async (query: string, page: number): Promise<Photo[]> => {
  try {
    const response = await axios.get<PexelsApiResponse>(
      'https://api.pexels.com/v1/search',
      {
        headers: {
          Authorization: 'Uy4ysEhgxVruRgYGyJGqMQ4hbswnmushQXJDqPxyDgeXncuMRZPErHNU',
        },
        params: {
          query: query,
          page: page, 
          per_page: 15, 
        },
      }
    );
    return response.data.photos;
  } catch (error) {
    console.error('Error fetching data from Pexels API:', error);
    throw error;
  }
};

export const getExactPhoto = async (id: string | undefined):Promise<IExactPhoto> => {
  try {
    const response = await axios.get<PexelsApiResponse>(
      `https://api.pexels.com/v1/photos/${id}`,
      {
        headers: {
          Authorization: 'Uy4ysEhgxVruRgYGyJGqMQ4hbswnmushQXJDqPxyDgeXncuMRZPErHNU',
        },
      }
    );
    const { photographer, src, alt } = response.data;
    return {
      src: src.medium,
      photographer,
      alt
    }
  } catch(error) {
    console.error('Error fetching data from Pexels API:', error);
    throw error;
  } 
}
