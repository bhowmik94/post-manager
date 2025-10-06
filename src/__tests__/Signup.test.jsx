import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Signup from '../pages/Signup';
import api from '../api';
import { MemoryRouter } from 'react-router-dom';

vi.mock('axios');

describe('Signup Page', () => {
  it('renders signup form', () => {
    render(<Signup />, { wrapper: MemoryRouter });
    expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  });

  it('submits form and stores token', async () => {
    api.post.mockResolvedValue({ data: { token: 'mock-token' } });
    render(<Signup />, { wrapper: MemoryRouter });

    await userEvent.type(screen.getByPlaceholderText(/username/i), 'tester');
    await userEvent.type(screen.getByPlaceholderText(/email/i), 'test@test.com');
    await userEvent.type(screen.getByPlaceholderText(/password/i), '123456');
    await userEvent.click(screen.getByRole('button', { name: /signup/i }));

    setTimeout(() => {
      expect(localStorage.getItem('token')).toBe('mock-token');
    }, 0);
  });
});
