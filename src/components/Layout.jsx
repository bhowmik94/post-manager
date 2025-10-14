import { useNavigate } from "react-router-dom";
import Wrapper from "./Wrapper";

export default function Layout({ children }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-4 flex justify-between items-center shadow">
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={() => navigate("/posts")}
        >
          NotePilot
        </h1>
        {localStorage.getItem("token") && (
          <button
            onClick={logout}
            className="bg-red-500 p-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        )}
      </header>
      {/* Main Content */}
      <Wrapper centered={false}>
        <main className="relative p-6 z-10 2xl:px-64">{children}</main>
      </Wrapper>
      
    </div>
  );
}
