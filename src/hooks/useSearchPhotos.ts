import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchPhotos } from '../types/api';
import { Photo } from '../types/types';

export const useSearchPhotos = () => {
  const [images, setImages] = useState<Photo[]>([]);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
    useEffect(() => {
    const data = localStorage.getItem('data');
    if (data) {
      setImages(JSON.parse(data));
    }
  }, []);

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setError('The field cannot be empty');
      return;
    }
    
    try {
      const photos = await fetchPhotos(query);
      localStorage.setItem('data', JSON.stringify(photos));
      setImages(photos);
      setError('');

      if (photos.length === 0) {
        navigate('/nothingFound');
      }
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  return { images, error, handleSearch };
};
