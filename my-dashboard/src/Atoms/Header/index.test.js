import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import Header from '.';

afterEach(cleanup);

it('Header title 표시', () => {
  const title = 'title';
  render(<Header title={title} />);

  const result = `Hello ${title}`;

  expect(screen.getByText(result)).toBeVisible();
});

it('Header title 제대로 설정됬는지 확인', () => {
  const title = 'title1';
  render(<Header title={title} />);

  const result = `Hello ${title}`;

  expect(screen.getByText(result).textContent).toBe(result);
});
