import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/register", form);
      localStorage.setItem("token", res.data.token);
      navigate("/posts");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm md:max-w-md lg:max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={onChange}
            className="border p-2 rounded"
          />
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={onChange}
            className="border p-2 rounded"
          />
          <input
            name="password"
            placeholder="Password"
            type="password"
            value={form.password}
            onChange={onChange}
            className="border p-2 rounded"
          />
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Signup
          </button>
        </form>
        <button
          onClick={() => navigate("/login")}
          className="mt-4 text-sm text-blue-500 hover:underline"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}
