import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '24px',
    marginBottom: '16px',
    color: '#333',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    outline: 'none',
    width: '250px',
    '&:focus': {
      borderColor: '#333',
    },
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#555',
    },
  },
  photoMeta: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '16px',
    width: '100%',
    maxWidth: '1400px',
    margin: '30px auto'
  },
  card: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '8px',
      transition: 'transform 0.3s ease',
    },
    '&:hover img': {
      transform: 'scale(1.05)',
    },
  },
  overlay: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    padding: '8px',
    color: '#fff',
    background: 'rgba(0, 0, 0, 0.6)',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  searchInput: {
    background: 'black',
    opacity: '0.8',
    color: 'white',
    padding: '15px 10px',
    borderRadius: '20px',
    border:'none',
    marginBottom: '15px',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  searchButton: {
    background: 'black',
    color: 'white',
    fontFamily: 'sans-serif',
    fontWeight: '700',
    padding: '15px 20px',
    cursor: 'pointer',
    opacity: '0.8',
    border: 'none',
    borderRadius: '20px',
    transition: '.6s',
    '&:hover': {
      opacity: '0.9'
    }
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  }
});

