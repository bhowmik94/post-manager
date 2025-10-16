import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "./Wrapper";

export default function AuthForm({
  title,
  onSubmit,
  loading,
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

    // remove username when logging in
    if (!includeUsername) {
      delete form.username;
    }

    onSubmit(form);
  };

  return (
    <Wrapper centered>
      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-sm md:max-w-md border border-white/30 z-10">
        <div className="relative w-fit mx-auto mb-4">
          <span
            onClick={() => navigate("/")}
            className="relative z-10 text-3xl font-bold text-indigo-600 cursor-pointer transition-transform duration-200"
          >
            NotePilot
          </span>
          <span className="absolute inset-0 rounded-full animate-ping bg-indigo-300/30 -z-0"></span>
        </div>

        <p className="text-2xl font-semibold mb-6 text-center">{title}</p>

        <form onSubmit={handleSubmit} className="flex flex-col">
          {includeUsername && (
            <div className="mb-4">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:outline-none ${
                  errors.username
                    ? "border-red-500"
                    : "focus:ring-2 focus:ring-indigo-500"
                }`}
                required
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
              )}
            </div>
          )}

          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none ${
                errors.email ? "border-red-500" : "focus:ring-1"
              }`}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-6">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none ${
                errors.password ? "border-red-500" : "focus:ring-1"
              }`}
              required
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={Object.values(errors).some((e) => e)}
            className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {loading && (
              <span className="inline-block w-4 h-4 border-2 mx-2 border-current border-t-transparent rounded-full animate-spin"></span>
            )}
            {loading ? "Please wait..." : title}
          </button>
        </form>

        {linkText && linkTo && (
          <button
            type="button"
            onClick={() => navigate(linkTo)}
            className="mt-4 w-full text-sm text-indigo-500 hover:underline"
          >
            {linkText}
          </button>
        )}
      </div>
    </Wrapper>
  );
}
