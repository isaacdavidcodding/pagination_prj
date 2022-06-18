import React from 'react';
import { BrowserRouter as Router, Routes as NRoutes, Route } from 'react-router-dom';

import Main from './pages/main';
import Movie from "./pages/movie";

const Routes = () => (
  <Router>
    <NRoutes>
      <Route exact path="/" element={<Main />}></Route> 
      <Route path="/movies/:page/:id" element={<Movie />}></Route>
    </NRoutes>
  </Router>
);

export default Routes;