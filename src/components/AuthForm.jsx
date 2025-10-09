import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthForm({
  title,
  onSubmit,
  includeUsername = false,
  linkText,
  linkTo,
}) {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // --- simple validation rules ---
  const validateField = (name, value) => {
    let message = "";

    if (name === "email") {
      if (!value) message = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        message = "Invalid email format";
    }

    if (name === "password") {
      if (!value) message = "Password is required";
      else if (value.length < 6)
        message = "Password must be at least 6 characters";
    }

    if (name === "username" && includeUsername) {
      if (!value) message = "Username is required";
      else if (value.length < 3)
        message = "Username must be at least 3 characters";
    }

    return message;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // validate on change
    const message = validateField(name, value);
    setErrors({ ...errors, [name]: message });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // final check on submit
    const newErrors = {};
    Object.keys(form).forEach((field) => {
      if (includeUsername || field !== "username") {
        const msg = validateField(field, form[field]);
        if (msg) newErrors[field] = msg;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(form);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm md:max-w-md lg:max-w-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">{title}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {includeUsername && (
            <div className="mb-4">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          )}

          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            {title}
          </button>
        </form>

        {linkText && linkTo && (
          <button
            type="button"
            onClick={() => navigate(linkTo)}
            className="mt-4 w-full text-sm text-blue-500 hover:underline"
          >
            {linkText}
          </button>
        )}
      </div>
    </div>
  );
}