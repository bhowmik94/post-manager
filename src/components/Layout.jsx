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
      <div className="bg-indigo-600 text-white p-4">
        <header className="layout-container flex justify-between items-center">
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
      </div>
      {/* Main Content */}
      <Wrapper centered>
        <main className="relative p-6 z-10 xl:w-3/5 lg:w-4/5">{children}</main>
      </Wrapper>
    </div>
  );
}
