/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';

test('renders header', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/Header/i);
  expect(linkElement).toBeDefined();
});
