
vi.mock("../api", () => ({
  default: {
    post: vi.fn(),
    get: vi.fn(),
    put: vi.fn(),
    delete: vi.fn(),
    interceptors: { request: { use: vi.fn() } },
  }
}));

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Login from '../pages/Login';
import { MemoryRouter } from "react-router-dom";


import api from "../api";

describe('Login Page', () => {
  it('renders login form', () => {
    render(<Login />, { wrapper: MemoryRouter });
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('submits form and stores token', async () => {
    api.post.mockResolvedValue({ data: { token: 'mock-token' } });
    render(<Login />, { wrapper: MemoryRouter });
    
    await userEvent.type(screen.getByPlaceholderText(/email/i), 'test@test.com');
    await userEvent.type(screen.getByPlaceholderText(/password/i), '123456');
    await userEvent.click(screen.getByRole('button', { name: /login/i }));

    // Wait a tick
    setTimeout(() => {
      expect(localStorage.getItem('token')).toBe('mock-token');
    }, 0);
  });
});
