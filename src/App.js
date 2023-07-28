import logo from "./logo.svg";
import "./App.css";
import SearchIcon from "../src/search.svg";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
//cfa139ab

const API_URL = "http://www.omdbapi.com?apikey=cfa139ab";
function App() {
  const [Movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>

      {Movies?.length > 0 ? (
        <div className="container">
          {Movies.map((Movie) => (
            <MovieCard Movie={Movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
}

export default App;

// //   const[counter,setCounter]=useState(0)

// //   useEffect(()=>{
// // setCounter(200)
// //   },[counter])

// //   return (
// //     <div className="App">
// //       <button onClick={()=>setCounter((counter)=>counter-1)}>-</button>
// //     <h1>{counter}</h1>
// //     <button onClick={()=>setCounter((counter)=>counter+1)}>+</button>
// //     </div>
//   );
