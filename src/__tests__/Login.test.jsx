
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

describe("api mock", () => {
  it("should be mocked", () => {
    expect(api.get).toBeTypeOf("function");
    expect(api.post).toBeTypeOf("function");
  });
});
