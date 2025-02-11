import { useEffect, useState } from "react";
import { Logo, Nav, NumResults, Search } from "./components/Nav";
import { Box } from "./components/Box";
import { MovieList } from "./components/Movie";
import { WatchedMoviesContainer, WatchedMoviesList, WatchedSummary } from "./components/WatchedMovie";
import { useFetchMovies } from "./Hooks/useFetchMovies";
import { MovieDetails } from "./components/MovieDetails";

/* const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
]; */



export default function App() {
  const [query, setQuery] = useState("");
  const {movies, isLoading, error} = useFetchMovies(query);

  function initialMovies() {
    const localStorageMovies = localStorage.getItem("watched");
    return localStorageMovies ? JSON.parse(localStorageMovies) : [];
  }

  const [watched, setWatched] = useState(initialMovies());

  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);
  

  function handleSelectMovie(id) {
    setSelectedId(id);
    }

    function handleCloseMovie() {
    setSelectedId(null);
    }

    function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
    }


    function handleDeleteMovie(id) {
      setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
    }
    



  return (
    <>
      <Nav>
        <Logo/>
        <Search query={query} setQuery={setQuery}/>
        <NumResults movies={movies}/>
      </Nav>

      <main className="main">
        <Box>
          {isLoading && <p className="loader"> Cargando...</p>}
          {error && <p className="error">⛔ {error}</p>}
          <MovieList movies={movies} onSelectMovie={handleSelectMovie}/>
        </Box>

        <Box>
          <WatchedMoviesContainer>
            {selectedId ? (
              <MovieDetails 
              selectedId={selectedId} 
              onCloseMovie={handleCloseMovie} 
              onAddWatched={handleAddWatched} 
              watched={watched}
              /> 
            ) : (
              <>
                  <WatchedSummary watched={watched}/>
                  <WatchedMoviesList watched={watched} onDeleteMovie={handleDeleteMovie}/>
              </>
            )}
          </WatchedMoviesContainer>
        </Box>
      </main>
    </>
  );
}
