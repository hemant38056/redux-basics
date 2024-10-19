import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import Counter from './components/Counter';
import MovieLists from './components/MovieLists';
import MovieDetails from './components/MovieDetails';

function App() {
  
  return (
    <div className="App">
      <MovieLists/>
      <MovieDetails/>
      <Counter/>
    </div>
  );
}

export default App;
