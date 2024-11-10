import React from 'react';
import { useStyles } from '../styles';
import { Link } from 'react-router-dom';

export const PaxelsNotFound: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.notFoundContainer}>
      <h2>Oops! Page Not Found</h2>
      <p>We couldn't find the page you're looking for.</p>
      <Link to="/" className={classes.backButton}>
        Go Back to Home
      </Link>
    </div>
  );
};
