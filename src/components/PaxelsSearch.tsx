import React, { useState } from 'react';
import { Photo } from '../types/types';
import { fetchPhotos } from '../types/api';
import { PaxelsPhoto } from './PaxelsPhoto';
import { useStyles } from '../styles';

const PexelsSearch: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<Photo[]>([]);
  const [error, setError] = useState<string>('');
  const classes = useStyles();

  const handleSearch = async () => {
    if (!query.trim()) {
        setError('The field can not be empty');
        return;
    }
    try {
      const photos = await fetchPhotos(query);
      setImages(photos);
      setError('');
      setQuery('');
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  return (
    <div className={classes.mainContainer}>
      <h2>Pexels Image Search</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for images..."
        className={classes.searchInput}
      />
      <button 
        className={classes.searchButton}
        onClick={handleSearch}>
        Search
      </button>
      {error && <p>{error}</p>}
      <div className={classes.photoMeta}>
        {images.map((image) =>  <PaxelsPhoto key={image.id} source={image.src.medium} alt={image.alt} photographer={image.photographer}/> )}
      </div>
    </div>
  );
};

export default PexelsSearch;
