import api from "../api";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const res = await api.post("/auth/login", data);
      localStorage.setItem("token", res.data.token);
      navigate("/posts");
    } catch (err) {
      alert("Login failed: ", err);
    }
  };

  return <AuthForm title="Login" onSubmit={handleLogin} linkText="Go to Signup" linkTo="/signup" />;
}
