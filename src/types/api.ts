import axios from 'axios';
import { PexelsApiResponse, Photo } from '../types/types';

export const fetchPhotos = async (query: string): Promise<Photo[]> => {
  try {
    const response = await axios.get<PexelsApiResponse>(
      'https://api.pexels.com/v1/search',
      {
        headers: {
          Authorization: 'Uy4ysEhgxVruRgYGyJGqMQ4hbswnmushQXJDqPxyDgeXncuMRZPErHNU', //api_key gives an err
        },
        params: {
          query: query,
        },
      }
    );
    return response.data.photos;
  } catch (error) {
    console.error('Error fetching data from Pexels API:', error);
    throw error;
  }
};
