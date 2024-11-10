import React, { useState } from 'react';
import { PaxelsPhoto } from './PaxelsPhoto';
import { useStyles } from '../styles';
import { useSearchPhotos } from '../hooks/useSearchPhotos';

const PexelsSearch: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const { images, error, handleSearch } = useSearchPhotos();
  const classes = useStyles();

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
        onClick={() => handleSearch(query)}>
        Search
      </button>
      {error && <p>{error}</p>}
      <div className={classes.photoMeta}>
        {images.map((image) => (
          <PaxelsPhoto 
            key={image.id} 
            source={image.src.medium} 
            alt={image.alt} 
            id={image.id} 
            photographer={image.photographer} 
          />
        ))}
      </div>
    </div>
  );
};

export default PexelsSearch;
