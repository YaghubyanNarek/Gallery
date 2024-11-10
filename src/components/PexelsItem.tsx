import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStyles } from '../styles';

export const PexelsItem: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const classes = useStyles();

    const { alt, photographer, source } = location.state || {};

    if (!source) {
        return <p className={classes.modalText}>Image details not available.</p>;
    }

    return (    
        <div className={classes.modalContainer}>
            <div className={classes.backIcon} onClick={() => navigate('/')}>
                ← Back
            </div>
            <img src={source} alt={alt} className={classes.modalImage} />
            <p className={classes.photographer}>Photo by: {photographer}</p>
            <p className={classes.description}>{alt || 'No description available'}</p>
        </div>
    );
};
