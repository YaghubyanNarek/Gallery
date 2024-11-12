import PexelsSearch from './components/PaxelsSearch.tsx';
import { useStyles } from './styles.ts';
import { Routes, Route } from 'react-router-dom';
import { PexelsItem } from './components/PaxelsItem.tsx';
import { PaxelsNotFound } from './components/PaxelsNoutFound.tsx';
import { PaxelsHeader } from './components/PaxelsHeader.tsx';
import { PaxelsFavorites } from './components/PaxelsFavorites.tsx';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <PaxelsHeader />
      <Routes>
        <Route path="/" element={<PexelsSearch />} />
        <Route path="/photos/:id" element={<PexelsItem />} />
        <Route path="/nothingFound" element={<PaxelsNotFound />} />
        <Route path="/favorites" element={<PaxelsFavorites />} />
      </Routes>
    </div>
  );
}

export default App;
