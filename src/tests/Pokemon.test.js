import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router';
import { createBrowserHistory, createMemoryHistory } from 'history';
import pokemons from '../data';
import App from '../App';
import { Pokemon } from '../components';

test('Renders all favorite pokemons', async () => {
  const {
    id,
    name,
    type,
    averageWeight: { value, measurementUnit },
    image,
    moreInfo,
    foundAt,
    summary,
  } = pokemons[0];

  const history = createMemoryHistory();
  render(
    <Router history={ history }>
      <App />
    </Router>,
  );

  expect(screen.getByRole('link', { name: 'More details' })).toBeInTheDocument();
  userEvent.click(screen.getByRole('link', { name: 'More details' }));

  expect(screen.getByTestId('pokemon-name')).toBeInTheDocument();
  expect(screen.getByTestId('pokemon-type')).toBeInTheDocument();
  expect(screen.getByTestId('pokemon-weight')).toBeInTheDocument();

  expect(screen.getByText(`${name}`)).toBeInTheDocument();
  expect(screen.getByText(`${type}`)).toBeInTheDocument();

  expect(
    screen.getByText(`Average weight: ${value} ${measurementUnit}`),
  ).toBeInTheDocument();

  expect(screen.getByAltText(`${name} sprite`)).toBeInTheDocument();
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

  // expect(screen.getAllByRole('link', { name: 'More details' })).toHaveLength(NINE)
});

test('', () => {
  const history = createMemoryHistory();
  history.push('/');
  render(
    <Router history={ history }>
      <App />
    </Router>,
  );
  expect(screen.getByRole('link', { name: 'More details' })).toBeInTheDocument();
});

test('', () => {
  const history = createMemoryHistory();
  history.push('/');
  render(
    <Router history={ history }>
      <App />
    </Router>,
  );
  expect(screen.getByRole('link', { name: 'More details' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'More details' })).not.toBeDisabled();
  userEvent.click(screen.getByRole('link', { name: 'More details' }));
  expect(screen.getByRole('heading',
    { name: `${pokemons[0].name} Details` })).toBeInTheDocument();

  expect(screen.getByRole('heading', { name: `${pokemons[0].name} Details` }));
});

test('', () => {
  const history = createMemoryHistory();

  console.log(history)
  render(
    <Router history={ history }>
      <App />
    </Router>,
  );
  expect(screen.getByRole('link', { name: 'More details' })).toBeInTheDocument();
   userEvent.click(screen.getByRole('link', { name: 'More details' }));

  // expect(screen.getByRole('link', { name: 'More details' })).toHaveAttribute('href', 'pokemons/25');
});
