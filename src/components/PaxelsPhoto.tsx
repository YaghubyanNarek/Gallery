import React from 'react'
import { useStyles } from '../styles'
import { Link } from 'react-router-dom';


type Props = {
    source: string,
    alt: string,
    photographer: string,
    id: number
}

export const PaxelsPhoto:React.FC<Props> = ({source, alt, photographer, id}) => {
    const classes = useStyles();
  return (
    <Link 
        to={`/photos/${id}`}
        state={{ source, alt, photographer }}    
    >
        <div>
            <img className={classes.image} src={source} alt={alt} style={{ width: '100%' }} />
            <p className={classes.photographerText}>Photo by: {photographer}</p>
        </div>
    </Link>
    )
}
