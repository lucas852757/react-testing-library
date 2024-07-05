import React from 'react';
import { screen, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Pokedex } from '../components';
import pokemons from '../data';
import App from '../App';

test('Testing whether the h2 element appears with the message '
  + '"Encountered pokémons"', () => {
  render(<App />, { wrapper: BrowserRouter });

  userEvent.click(screen.getByRole('link', { name: 'Home' }));
  expect(screen.getByText('Encountered pokémons')).toBeInTheDocument();
});

test('Testig the button "Próximo pokémon"', () => {
  render(<App />, { wrapper: BrowserRouter });

  userEvent.click(screen.getByRole('link', { name: 'Home' }));

  pokemons.forEach((pokemon) => {
    expect(screen.getByText(`${pokemon.name}`)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Próximo pokémon' })).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: 'Próximo pokémon' }));
  });
});
test('Testing whether the Pokédex has the filter buttons.', () => {
  const SEVEN = 7;
  render(<App />, { wrapper: BrowserRouter });

  userEvent.click(screen.getByRole('link', { name: 'Home' }));

  pokemons.forEach((pokemon) => {
    expect(screen.getByRole('button', { name: `${pokemon.type}` })).toBeInTheDocument();
  });

  expect(screen.getAllByTestId('pokemon-type-button')).toHaveLength(SEVEN);
  expect(screen.getByRole('button', { name: 'All' })).not.toBeDisabled();
  expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument();
  userEvent.click(screen.getByRole('button', { name: 'All' }));
});

test('Testing whether the Pokédex has the reset button.', () => {
  render(<App />, { wrapper: BrowserRouter });

  userEvent.click(screen.getByRole('link', { name: 'Home' }));
});
