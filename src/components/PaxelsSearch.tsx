import React, { useEffect, useState } from 'react';
import { PaxelsPhoto } from './PaxelsPhoto';
import { useStyles } from '../styles';
import { useSearchPhotos } from '../hooks/useSearchPhotos';
import { DEFAULT_QUERY } from '../types/constants';

const PexelsSearch: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const { images, error, handleSearch } = useSearchPhotos();
  const classes = useStyles();

  useEffect(() => {
    handleSearch(DEFAULT_QUERY).catch((err) =>
      console.error('Error fetching default images:', err)
    );
  }, []);

  return (
    <div className={classes.mainContainer}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for images..."
        className={classes.searchInput}
      />
      <button
        className={classes.searchButton}
        onClick={() => handleSearch(query)}
      >
        Search
      </button>
      {error && <p>{error}</p>}
      <div className={classes.photoMeta}>
        {images.map((image, index) => (
          <PaxelsPhoto
            key={`${image.id}-${index}`} // just image.id gives me warning? :)
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
