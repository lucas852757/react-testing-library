import React from 'react';
import { screen, render, userEvent } from '@testing-library/react';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import pokemons from '../data';
import App from '../App';
import { Pokemon } from '../components';

test('Renders all favorite pokemons', async () => {
  const { id, name, type, averageWeight, image,
    moreInfo, foundAt, summary, } = pokemons[0];
  render(<Pokemon isFavorite showDetailsLink={ false } pokemon={ pokemons[0] } />);

  expect(screen.getByTestId('pokemon-name')).toBeInTheDocument();
  expect(screen.getByTestId('pokemon-type')).toBeInTheDocument();
  expect(screen.getByTestId('pokemon-weight')).toBeInTheDocument();

  expect(screen.getByText(`${name}`)).toBeInTheDocument();
  expect(screen.getByText(`${type}`)).toBeInTheDocument();
  
  expect(screen.getByText(`${averageWeight.value}`)).toBeInTheDocument();

  // const NINE = 9;
  // const history = createBrowserHistory();

  // render(
  //   <Router history={ history }>
  //     <App />
  //   </Router>,
  // );

  // pokemons.forEach((pokemon) => {
  //   const { id, name } = pokemon;
  //   const route = `/pokemons/${id}`;

  //   history.push(route);
  //   userEvent.click(screen.getByRole('checkbox'));
  //   expect(screen.getByRole('checkbox').checked).toBe(true);

  //   history.push('/favorites/');

  //   expect(screen.getByAltText(`${name} sprite`)).toBeInTheDocument();
  //   expect(screen.getByAltText(`${name} is marked as favorite`));
  // });
  // expect(screen.getAllByTestId('pokemon-name')).toHaveLength(NINE);
  // expect(screen.getAllByTestId('pokemon-type')).toHaveLength(NINE);
  // expect(screen.getAllByTestId('pokemon-weight')).toHaveLength(NINE);

  // expect(screen.getAllByRole('link', { name: 'More details' })).toHaveLength(NINE);
});
