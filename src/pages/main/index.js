import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Main extends Component {
  state = { movies: [], qtdPages: 0, page: 0 }

  componentDidMount() { this.loadMovies(); }

  loadMovies = async (page = 0) => {
    const response = await api.get(`/movies`)
    const movies = response.data[page]
    const qtdPages = response.data.length - 1

    this.setState( {movies, page, qtdPages} ); 
  };

  prevPage = () => {
    const { page } = this.state;

    if (page === 0) return;

    const numberPage = page - 1;

    this.loadMovies(numberPage);
  }

  nextPage = () => {
    const { page, qtdPages } = this.state;
    
    if (page === qtdPages) return;

    const numberPage = page + 1;

    this.loadMovies(numberPage);
  }

  render() {
		const { movies, page, qtdPages } = this.state

    return (
      <div className="movie-list">
        {movies.map(movie => (
          <article key={movie.id}>
            <strong>Título: {movie.title}</strong>
            <p><strong>Ano:</strong> {movie.year}</p>
            <Link to={`/movies/${this.state.page}/${movie.id}`}>Mais informações</Link>
          </article>
        ))}
        <div className="actions">
          <button disabled={page === 0} onClick={this.prevPage}>Voltar</button>
          <button disabled={page === qtdPages} onClick={this.nextPage}>Avançar</button>
        </div>
      </div>            
    )
  }
}