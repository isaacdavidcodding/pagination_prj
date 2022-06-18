import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useParams } from "react-router-dom";

import './styles.css';

const Movie = () => {
  const { id, page } = useParams()

  const [movie, setMovie] = useState([])

  useEffect(() => {
    api.get(`/movies`)
    .then(res => {
      setMovie(res.data[page].find(e => e.id === parseInt(id)))
    })
    .then(err => {
      console.log(err)
    })
  }, [])

  return (
    <div className="movie-info">
      <h1>{movie.title} - {movie.year}</h1><br/>
      <h1>{movie.info}</h1>
    </div>
  )
}

export default Movie
