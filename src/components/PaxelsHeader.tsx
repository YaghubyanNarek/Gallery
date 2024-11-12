import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from '../styles';

export const PaxelsHeader: React.FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div className={classes.headerTitle}>Pexels Image Search</div>
      <nav className={classes.nav}>
        <Link to="/" className={classes.navLink}>
          Home
        </Link>
        <Link to="/favorites" className={classes.navLink}>
          Favorites
        </Link>
      </nav>
    </header>
  );
};
