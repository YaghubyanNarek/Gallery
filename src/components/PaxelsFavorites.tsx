import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useStyles } from '../styles';
import { addToFavorites } from '../features/favorites/favoritesSlice';
import { FaHeartBroken, FaDownload, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PaxelsFilter } from './PaxelsFilter';

export const PaxelsFavorites: React.FC = () => {
  const classes = useStyles();
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const dispatch = useAppDispatch();

  const [showShareNotification, setShowShareNotification] = useState(false);

  const handleShare = (url: string | undefined) => {
    if (!url) return;

    navigator.clipboard.writeText(url).then(() => {
      setShowShareNotification(true);
      setTimeout(() => setShowShareNotification(false), 3000); 
    }).catch((err) => {
      console.error('Failed to copy URL: ', err);
    });
  };

  const handleDownload = async (url: string | undefined) => {
    if (!url) return;

    try {
      const response = await fetch(url, { mode: 'cors' });
      if (!response.ok) throw new Error('Failed to fetch image');

      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = url.split('/').pop() || 'image.jpg';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <div className={classes.favoritesContainer}>
      <PaxelsFilter />
      {favorites.length === 0 ? (
        <p className={classes.emptyMessage}>No favorites found</p>
      ) : (
        <div className={classes.favoritesGrid}>
          {favorites.map((item) => (
            <div key={item.id} className={classes.favoriteItem}>
              <Link to={`/photos/${item.id}`}>
                <img
                  src={item.source}
                  alt={item.alt}
                  className={classes.favoritesImage}
                />
                <p className={classes.favoritesPhotographer}>
                  {item.photographer}
                </p>
              </Link>
              <button
                className={classes.removeButton}
                onClick={() => dispatch(addToFavorites({ id: item.id }))}
              >
                <FaHeartBroken className={classes.icon} /> Remove
              </button>
              <button
                className={classes.downloadButton}
                onClick={() => handleDownload(item.source)}
              >
                <FaDownload className={classes.icon} /> Download
              </button>
              <button
                className={classes.shareButton}
                onClick={() => handleShare(item.source)}
              >
                <FaShareAlt className={classes.icon} /> Share
              </button>
            </div>
          ))}
        </div>
      )}
      
      {showShareNotification && (
        <div className={classes.shareNotification}>
          Link copied to clipboard!
        </div>
      )}
    </div>
  );
};
