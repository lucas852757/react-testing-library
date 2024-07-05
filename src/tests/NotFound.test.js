import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import App from '../App';

test('Testing bad route "Not found page".', () => {
  const history = createMemoryHistory();
  history.push('/some/bad/route');
  render(
    <Router history={ history }>
      <App />
    </Router>,
  );

  expect(screen.getByText('Page requested not found')).toBeInTheDocument();
  const pickchuCrying = screen.getByAltText(
    'Pikachu crying because the page requested was not found',
  );
  expect(pickchuCrying.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
