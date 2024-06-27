import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';

test('Find the text \'Home\' on the home page .', () => {
  render(<App />, { wrapper: BrowserRouter });
  expect(screen.getByText('Home')).toBeInTheDocument();
});

test('Find the text \'About\' on the About page .', () => {
  render(<App />, { wrapper: BrowserRouter });
  expect(screen.getByText('About')).toBeInTheDocument();
});

test('Find the text \'Favorite Pokémons\' on the favortite page .', () => {
  render(<App />, { wrapper: BrowserRouter });

  expect(screen.getByText('Favorite Pokémons')).toBeInTheDocument();
});

test('Redirect to home page .', () => {
  render(<App />, { wrapper: BrowserRouter });
  userEvent.click(screen.getByRole('link', { name: 'Home' }));
  expect(screen.getByText('Pokédex')).toBeInTheDocument();
});

test('Redirect to about page .', () => {
  render(<App />, { wrapper: BrowserRouter });

  userEvent.click(screen.getByRole('link', { name: 'About' }));
  expect(screen.getByText('About Pokédex')).toBeInTheDocument();
});

test('Redirect to favorite page.', () => {
  render(<App />, { wrapper: BrowserRouter });

  userEvent.click(screen.getByRole('link', { name: 'Favorite Pokémons' }));
  expect(screen.getByText('No favorite pokemon found')).toBeInTheDocument();
});

test('Redirect to notFoundPage', () => {
  const history = createMemoryHistory();
  history.push('/some/bad/route');
  render(
    <Router history={ history }>
      <App />
    </Router>,
  );

  expect(screen.getByText('Page requested not found')).toBeInTheDocument();
});
