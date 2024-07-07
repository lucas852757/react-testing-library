import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';
import pokemons from '../data';
import App from '../App';

const MOREDETAILS = 'More details';
test('Testing whether the deataild Pokemon information appears on the screen.', () => {
  const history = createMemoryHistory();
  render(
    <Router history={ history }>
      <App />
    </Router>,
  );

  expect(screen.getByText(MOREDETAILS)).toBeInTheDocument();
  userEvent.click(screen.getByText(MOREDETAILS));
  expect(screen.getByText(`${pokemons[0].name} Details`)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Summary' })).toBeInTheDocument();
  expect(screen.getByText(pokemons[0].summary)).toBeInTheDocument();
});

test('Testing whether the pokemon maps appear on screen. ', () => {
  const history = createMemoryHistory();
  render(
    <Router history={ history }>
      <App />
    </Router>,
  );

  expect(screen.getByText(MOREDETAILS)).toBeInTheDocument();
  userEvent.click(screen.getByText(MOREDETAILS));
  expect(screen.getByRole('heading', { name: `Game Locations of ${pokemons[0].name}` }));
  expect(pokemons[0].foundAt).toHaveLength(2);
  expect(screen.getByText('Kanto Viridian Forest')).toBeInTheDocument();
  expect(screen.getByText('Kanto Power Plant')).toBeInTheDocument();

  const img = screen.getAllByAltText(`${pokemons[0].name} location`);
  expect(img[0].src).toContain(pokemons[0].foundAt[0].map);
  expect(img[1].src).toContain(pokemons[0].foundAt[1].map);
});

test('', () => {
  const history = createMemoryHistory();
  render(
    <Router history={ history }>
      <App />
    </Router>,
  );

  expect(screen.getByText(MOREDETAILS)).toBeInTheDocument();
  userEvent.click(screen.getByText(MOREDETAILS));
  expect(screen.getByRole('checkbox')).toBeInTheDocument();
  userEvent.click(screen.getByRole('checkbox'));
  expect(screen.getByText(`${pokemons[0].name} is marked as favorite`));
});
