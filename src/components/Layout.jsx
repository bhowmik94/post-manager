import { useNavigate } from "react-router-dom";

export default function Layout({ children }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow">
        <h1 className="text-xl font-bold cursor-pointer" onClick={() => navigate("/posts")}>
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

      {/* Main content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
