import React from 'react';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createBrowserHistory } from 'history';
import userEvent from '@testing-library/user-event';
import pokemons from '../data';
import App from '../App';

test('Renders the message "No favorite pokemon found"', () => {
  const history = createBrowserHistory();

  render(
    <Router history={ history }>
      <App />
    </Router>,
  );
  history.push('/favorites');
  expect(screen.getByText('No favorite pokemon found')).toBeInTheDocument();
});

test('Renders all favorite pokemons', async () => {
  const NINE = 9;
  const history = createBrowserHistory();

  render(
    <Router history={ history }>
      <App />
    </Router>,
  );

  pokemons.forEach((pokemon) => {
    const { id, name } = pokemon;
    const route = `/pokemons/${id}`;

    history.push(route);
    userEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('checkbox').checked).toBe(true);

    history.push('/favorites/');

    expect(screen.getByAltText(`${name} sprite`)).toBeInTheDocument();
    expect(screen.getByAltText(`${name} is marked as favorite`));
  });
  expect(screen.getAllByTestId('pokemon-name')).toHaveLength(NINE);
  expect(screen.getAllByTestId('pokemon-type')).toHaveLength(NINE);
  expect(screen.getAllByTestId('pokemon-weight')).toHaveLength(NINE);

  expect(screen.getAllByRole('link', { name: 'More details' })).toHaveLength(NINE);
});
