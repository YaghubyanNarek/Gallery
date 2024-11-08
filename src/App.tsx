import PexelsSearch from './components/PaxelsSearch.tsx';
import { useStyles } from './styles.ts';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <PexelsSearch />
    </div>
  );
}

export default App;
