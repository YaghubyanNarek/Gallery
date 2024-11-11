import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchPhotos } from '../types/api';
import { Photo } from '../types/types';

export const useSearchPhotos = () => {
  const [images, setImages] = useState<Photo[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1); 
  const [query, setQuery] = useState<string>(''); 
  const navigate = useNavigate();

  const handleSearch = async (newQuery: string) => {
    if (!newQuery.trim()) {
      setError('The field cannot be empty');
      return;
    }

    setQuery(newQuery); 
    setPage(1);
    setImages([]); 
    await fetchPhotosForQuery(newQuery, 1);
  };

  const fetchPhotosForQuery = async (searchQuery: string, pageNumber: number) => {
    if (loading) return; 

    setLoading(true); 
    try {
      const photos = await fetchPhotos(searchQuery, pageNumber);
      setImages((prevImages) => [...prevImages, ...photos]);
      setError('');

      if (photos.length === 0) {
        navigate('/nothingFound');
      }
    } catch (error) {
      console.error('Error during search:', error);
      setError('Failed to fetch photos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      
      const bottom =
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight - 100; 
      if (bottom && query.trim()) {
        setPage(page + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, query]); 

  useEffect(() => {
    if (page > 1) {
      fetchPhotosForQuery(query, page);
    }
  }, [page, query]); 

  return { images, error, handleSearch };
};
