import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('Testing whether an h2 element appears on the screen '
  + 'with the text "About Pokédex."', () => {
  render(<App />, { wrapper: BrowserRouter });

  userEvent.click(screen.getByRole('link', { name: 'About' }));
  expect(
    screen.getByRole('heading', { name: 'About Pokédex' }),
  ).toBeInTheDocument();
});

test('Testing whether 2 paragrafs appear on the screen.', async () => {
  render(<App />, { wrapper: BrowserRouter });

  userEvent.click(screen.getByRole('link', { name: 'About' }));
  expect(
    screen.getByText(
      'This application simulates a Pokédex, a'
        + ' digital encyclopedia containing all Pokémons',
    ),
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      'One can filter Pokémons by type, and see more details for each one of them',
    ),
  ).toBeInTheDocument();
});

test('Testing whether an image of a pokédex appears on the screen.', () => {
  render(<App />, { wrapper: BrowserRouter });
  userEvent.click(screen.getByRole('link', { name: 'About' }));
  const img = screen.getByAltText('Pokédex');
  expect(img.src).toContain(
    'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png',
  );
});
