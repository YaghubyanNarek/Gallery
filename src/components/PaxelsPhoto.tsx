import React from 'react'
import { useStyles } from '../styles'

type Props = {
    source: string,
    alt: string,
    photographer: string,
}

export const PaxelsPhoto:React.FC<Props> = ({source, alt, photographer}) => {
    const classes = useStyles();
  return (
        <div>
            <img className={classes.image} src={source} alt={alt} style={{ width: '100%' }} />
            <p>Photo by: {photographer}</p>
        </div>
    )
}
