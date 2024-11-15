import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useStyles } from '../styles';
import { getExactPhoto } from '../types/api';

export const PexelsItem: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();
  const { id } = useParams();

  const [photo, setPhoto] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const { alt, photographer, source } = location.state || {};

  useEffect(() => {
    const fetchPhoto = async () => {
      if (!source && id) {
        try {
          const data = await getExactPhoto(id);
          setPhoto(data);
        } catch (error) {
          setError('Failed to fetch photo details');
        }
      }
    };
    fetchPhoto();
  }, [id, source, location.state]);

  if (error) {
    return <p>{error}</p>;
  }

  const photoToDisplay = photo || { source, alt, photographer };

  return (
    <div className={classes.modalContainer}>
      <div className={classes.backIcon} onClick={() => navigate(-1)}>
        ← Back
      </div>
      <img
        src={photoToDisplay.src || source}
        alt={photoToDisplay.alt || 'No description'}
        className={classes.modalImage}
      />
      <p className={classes.photographer}>
        Photo by: {photoToDisplay.photographer || 'Unknown'}
      </p>
      <p className={classes.description}>
        {photoToDisplay.alt || 'No description available'}
      </p>
    </div>
  );
};
