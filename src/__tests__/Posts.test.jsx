import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Posts from '../pages/Posts';
import { MemoryRouter } from "react-router-dom";
vi.mock("../api", () => ({
  default: {
    post: vi.fn(),
    get: vi.fn(),
    put: vi.fn(),
    delete: vi.fn(),
    interceptors: { request: { use: vi.fn() } },
  }
}));
import api from "../api";

const mockPosts = [
  { _id: '1', title: 'Post 1', content: 'Content 1' },
  { _id: '2', title: 'Post 2', content: 'Content 2' },
];

describe('Posts Page', () => {
  beforeEach(() => {
    api.get.mockResolvedValue({ data: mockPosts });
    api.post.mockResolvedValue({});
    api.delete.mockResolvedValue({});
  });

  it('renders posts', async () => {
    render(<Posts />, { wrapper: MemoryRouter });
    await waitFor(() => expect(screen.getByText(/Post 1/i)).toBeInTheDocument());
    expect(screen.getByText(/Post 2/i)).toBeInTheDocument();
  });

  it('creates a post', async () => {
    api.post.mockResolvedValue({});
    render(<Posts />, { wrapper: MemoryRouter });

    await waitFor(() => expect(screen.getByText(/Post 1/i)).toBeInTheDocument());

    await userEvent.type(screen.getByPlaceholderText(/title/i), 'New Post');
    await userEvent.type(screen.getByPlaceholderText(/content/i), 'New Content');
    await userEvent.click(screen.getByRole('button', { name: /add post/i }));

    await waitFor(() => expect(api.post).toHaveBeenCalledWith('/posts', {
      title: 'New Post',
      content: 'New Content'
    }));
  });

  it('deletes a post', async () => {
    api.delete.mockResolvedValue({});
    render(<Posts />, { wrapper: MemoryRouter });

    await waitFor(() => expect(screen.getByText(/Post 1/i)).toBeInTheDocument());

    const deleteButtons = screen.getAllByRole('button', { name: /delete/i });
    await userEvent.click(deleteButtons[0]);

    await waitFor(() => expect(api.delete).toHaveBeenCalledWith('/posts/1'));
  });
});
