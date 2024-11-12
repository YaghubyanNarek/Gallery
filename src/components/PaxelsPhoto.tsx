import React from 'react';
import { useStyles } from '../styles';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addToFavorites } from '../features/favorites/favoritesSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

type Props = {
  source: string;
  alt: string;
  photographer: string;
  id: number;
};

export const PaxelsPhoto: React.FC<Props> = ({
  source,
  alt,
  photographer,
  id,
}) => {
  const classes = useStyles();

  const favorites = useAppSelector((state) => state.favorites.favorites);
  const inFavorites = favorites.some((favorite) => favorite.id === id);
  const dispatch = useAppDispatch();

  const toggleFavorites = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(addToFavorites({ source, alt, photographer, id }));
  };

  return (
    <div>
      <Link to={`/photos/${id}`} state={{ source, alt, photographer }}>
        <div>
          <img
            className={classes.image}
            src={source}
            alt={alt}
            style={{ width: '100%' }}
          />
          <p className={classes.photographerText}>Photo by: {photographer}</p>
        </div>
      </Link>
      <FontAwesomeIcon
        icon={inFavorites ? solidHeart : regularHeart}
        onClick={toggleFavorites}
        className={
          inFavorites ? classes.favoriteIconActive : classes.favoriteIcon
        }
        size="2x"
      />
    </div>
  );
};
