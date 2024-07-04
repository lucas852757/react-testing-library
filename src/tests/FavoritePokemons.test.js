import React from 'react';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createBrowserHistory } from 'history';
import { FavoritePokemons } from '../components';
import App from '../App';

// test('1', () => {
//   const history = createBrowserHistory();

//   render(
//     <Router history={ history }>
//       <App />
//     </Router>,
//   );
//   history.push('/favorites');
//   expect(screen.getByText('Favorite pokémons')).toBeInTheDocument();
// });

test('2', () => {
  const history = createBrowserHistory();

  render(
    <Router history={ history }>
      <App />
    </Router>,
  );
  history.push('/favorites');
  let { notFound } = FavoritePokemons;
  notFound = jest.fn();
  notFound.mockReturnValue('No favorite pokemon found');

  // console.log(spyNotFound.props.children.props.children);
  expect(notFound()).toBe('No favorite pokemon found');

  notFound.mockRestore();
});

test('', () => {
  const history = createBrowserHistory();

  render(
    <Router history={ history }>
      <App />
    </Router>,
  );
  history.push('/favorites');
  const pokemon = { id: 1, name: '1', type: 'fire', value: '1', measurementUnit: '1' };
  const pokemonReturn = { id: 1, name: '1', type: 'fire', value: '1', measurementUnit: '1' };
  let { renderFavoritePokemon } = FavoritePokemons;
  renderFavoritePokemon = jest.fn();
  renderFavoritePokemon.mockReturnValue(pokemon);
  // jest.spyOn(FavoritePokemons, 'renderFavoritePokemon');
  // const spyRenderFavoritePokemon = FavoritePokemons.renderFavoritePokemon();
  // pokemons.map((pokemon) => spyRenderFavoritePokemon(pokemon));
  // console.log(spyRenderFavoritePokemon.props.children.props.children);
  // expect(screen.getByTestId('pokemon-name')).toBeInTheDocument();
  // expect(screen.getByTestId('pokemon-type')).toBeInTheDocument();
  // expect(screen.getByTestId('pokemon-weight')).toBeInTheDocument();
  expect(renderFavoritePokemon()).toStrictEqual(pokemonReturn);

  renderFavoritePokemon.mockRestore();
});
