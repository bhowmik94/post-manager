import api from "../api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthForm from "../components/AuthForm";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (data) => {
    try {
      setLoading(true);
      const res = await api.post("/auth/login", data);
      localStorage.setItem("token", res.data.token);
      navigate("/posts");
    } catch (err) {
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* {loading && <Loader />} */}
      <AuthForm
        title="Login"
        onSubmit={handleLogin}
        loading={loading}
        linkText="Go to Signup"
        linkTo="/signup"
      />
    </>
  );
}
