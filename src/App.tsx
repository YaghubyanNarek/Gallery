import PexelsSearch from './components/PaxelsSearch.tsx';
import { useStyles } from './styles.ts';
import { Routes, Route } from 'react-router-dom';
import { PexelsItem } from './components/PexelsItem.tsx';
import { PaxelsNotFound } from './components/PaxelsNoutFound.tsx';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
        <Routes>
            <Route path="/" element={<PexelsSearch />} />
            <Route path="/photos/:id" element={<PexelsItem />} />
            <Route path='/nothingFound' element={<PaxelsNotFound />} />
        </Routes>
    </div>
  );
}

export default App;
