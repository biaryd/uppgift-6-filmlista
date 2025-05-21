'use client';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import MovieForm from '../components/MovieForm';
import Movie from '../components/Movie';
import OrderByAlpha from '../components/OrderByAlpha';
import OrderByGrade from '../components/OrderByGrade';


export default function Home() {
  const [movies, setMovies] = useState([]);
  
  //Lägger till en film
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };
  
  //Tar bort en film
  const deleteMovie = (index) => {
    const newMovies = [...movies];
    newMovies.splice(index, 1);
    setMovies(newMovies);
  };
  
  //Sorterar filmer alfabetiskt
  const sortByAlpha = () => {
    const sortedMovies = [...movies].sort((a, b) => 
      a.title.localeCompare(b.title)
    );
    setMovies(sortedMovies);
  };
  
  //Sorterar filmer efter betyg
  const sortByGrade = () => {
    const sortedMovies = [...movies].sort((a, b) => 
      b.grade - a.grade
    );
    setMovies(sortedMovies);
  };
  
  return (
    <main>
      <div className="movie-app">
        <h1>Min filmlista</h1>
        
        <MovieForm onAddMovie={addMovie} />
        
        <h2>Inlagda filmer</h2>
        <div className="sort-buttons">
          <OrderByAlpha onClick={sortByAlpha} />
          <OrderByGrade onClick={sortByGrade} />
        </div>
        
        <ul className="movies-list">
          {movies.map((movie, index) => (
            <Movie 
              key={index}
              title={movie.title}
              grade={movie.grade}
              onDelete={() => deleteMovie(index)}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}