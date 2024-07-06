import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import pokemons from '../data';
import App from '../App';
// import { Pokemon } from '../components';

const MOREDETAILS = 'More details';

test('Renders all favorite pokemons', async () => {
  const {
    name,
    type,
    averageWeight: { value, measurementUnit },
  } = pokemons[0];

  const history = createMemoryHistory();
  render(
    <Router history={ history }>
      <App />
    </Router>,
  );

  expect(
    screen.getByRole('link', { name: MOREDETAILS }),
  ).toBeInTheDocument();
  userEvent.click(screen.getByRole('link', { name: MOREDETAILS }));

  expect(screen.getByTestId('pokemon-name')).toBeInTheDocument();
  expect(screen.getByTestId('pokemon-type')).toBeInTheDocument();
  expect(screen.getByTestId('pokemon-weight')).toBeInTheDocument();

  expect(screen.getByText(`${name}`)).toBeInTheDocument();
  expect(screen.getByText(`${type}`)).toBeInTheDocument();

  expect(
    screen.getByText(`Average weight: ${value} ${measurementUnit}`),
  ).toBeInTheDocument();
  const img = screen.getByAltText(`${name} sprite`);
  expect(img).toBeInTheDocument();
  expect(img.src).toContain('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
});

test('', () => {
  const history = createMemoryHistory();
  history.push('/');
  render(
    <Router history={ history }>
      <App />
    </Router>,
  );
  expect(
    screen.getByRole('link', { name: MOREDETAILS }),
  ).toBeInTheDocument();
});

test('Testing whether the "More details"link '
  + 'redirects to the Pokemon page details', () => {
  const history = createMemoryHistory();
  history.push('/');
  render(
    <Router history={ history }>
      <App />
    </Router>,
  );
  expect(
    screen.getByRole('link', { name: MOREDETAILS }),
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: MOREDETAILS })).not.toBeDisabled();
  userEvent.click(screen.getByRole('link', { name: MOREDETAILS }));
  expect(
    screen.getByRole('heading', { name: `${pokemons[0].name} Details` }),
  ).toBeInTheDocument();
});

test('Testing whether the pokemon`s url is shown.', () => {
  const history = createMemoryHistory();
  history.push('/');
  render(
    <Router history={ history }>
      <App />
    </Router>,
  );

  expect(screen.getByRole('link', { name: MOREDETAILS })).toHaveAttribute(
    'href',
    '/pokemons/25',
  );
});

test('Testing whether a Pokémon image appears on the Pokémon details page '
  + 'and whether the Pokémon is marked as a favorite.', () => {
  const history = createMemoryHistory();
  history.push('/');
  render(
    <Router history={ history }>
      <App />
    </Router>,
  );

  expect(
    screen.getByRole('link', { name: MOREDETAILS }),
  ).toBeInTheDocument();
  userEvent.click(screen.getByRole('link', { name: MOREDETAILS }));
  expect(screen.getByRole('heading', { name: `${pokemons[0].name} Details` }));
  expect(screen.getByText('Pokémon favoritado?')).toBeInTheDocument();
  userEvent.click(screen.getByText('Pokémon favoritado?'));
  const img = screen.getByAltText(`${pokemons[0].name} is marked as favorite`);
  expect(img).toBeInTheDocument();
  expect(img.src).toContain('/star-icon.svg');
});
