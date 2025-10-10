import api from "../api";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = async (data) => {
    try {
      const res = await api.post("/auth/register", data);
      localStorage.setItem("token", res.data.token);
      navigate("/posts");
    } catch (err) {
      alert("Signup failed: ", err);
    }
  };

  return <AuthForm title="Signup" onSubmit={handleSignup} includeUsername linkText="Go to Login" linkTo="/login" />;
}
