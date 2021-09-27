import React, {useEffect, useState} from "react";
import './App.css';
import axios from 'axios';
import Movies from "./components/Movies";
import Loader from "./components/Loader";

const App = () => {
  // Movie list state.
  const [movies, setMovies] = useState(null);

  // Error state.
  const [error, setError] = useState(false);

  // Refresh the page.
  const refreshPage = ()=>{
    window.location.reload();
  }


  // Getting movie datas
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=40315881b5af1985a7ceba1f41b45973&language=en-US').then(data => {
      let lists = data.data.results;

      // Mock data for adult content scenario.
      lists[3]['adult'] = true;
      lists[7]['adult'] = true;
      lists[10]['adult'] = true;

      setMovies(lists);
    }).catch(error => {
      console.error(error);
      setError(true)
    })

  }, []);

  // If there is any network error show the retry button.
  if (error) {
    return (
        <div className='error-wrapper flex-center'>
          <button onClick={refreshPage}>Retry</button>
        </div>
    )
  }

  return (
    <div className="App">
      {
        movies ? <Movies movies={movies} /> : <Loader />
      }
    </div>
  );
}

export default App;
