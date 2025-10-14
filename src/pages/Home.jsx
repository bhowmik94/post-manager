import Layout from "../components/Layout";
import { CheckCircle, Rocket, Search, BarChart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Layout centered={true}>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {/* Welcome / Hero */}
        <div className="bg-white p-8 rounded-2xl shadow-md text-center border border-indigo-100 hover:shadow-lg transition-all duration-200 lg:col-span-3 scale-[1] hover:scale-[1.01]">
          <h2 className="text-3xl font-extrabold text-indigo-600 mb-3">
            Welcome to NotePilot
          </h2>
          <p className="text-gray-600">
            Your personal note-taking companion. Login or sign up to get
            started!
          </p>
        </div>

        {/* Features Section */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-indigo-100 hover:shadow-lg transition-all duration-200 scale-[1] hover:scale-[1.02]">
          <h2 className="text-2xl font-bold text-indigo-600 text-center mb-4">
            Features
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-indigo-500" /> Authentication via
              login and register
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-indigo-500" /> Create personal notes
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-indigo-500" /> Edit and delete notes
              anytime
            </li>
          </ul>
        </div>

        {/* Future Plans */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-indigo-100 hover:shadow-lg transition-all duration-200 scale-[1] hover:scale-[1.02]">
          <h2 className="text-2xl font-bold text-indigo-600 text-center mb-4">
            Future Plans
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <Rocket className="text-indigo-500" /> Role-based access control:
              admin vs user
            </li>
            <li className="flex items-center gap-2">
              <Search className="text-indigo-500" /> Search + Filter + Sort for
              Notes
            </li>
            <li className="flex items-center gap-2">
              <BarChart className="text-indigo-500" /> Dashboard highlighting
              key changes
            </li>
          </ul>
        </div>

        {/* Call to Action Card */}
        <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-8 rounded-2xl shadow-md text-center text-white hover:shadow-xl transition-all duration-200 scale-[1] hover:scale-[1.03]">
          <h3 className="text-xl font-bold mb-3">Ready to get started?</h3>
          <p className="mb-4">Jump straight into your notes now.</p>
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-indigo-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100"
          >
            Login Now
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center md:flex-row gap-6 mt-8 mx-auto max-w-5xl ">
        {/* Tech Stack Box */}
        <div className="bg-white/70 backdrop-blur-md border border-indigo-100 p-6 rounded-2xl shadow-md w-full max-w-xs hover:shadow-xl transition-all duration-200 scale-[1] hover:scale-[1.03]">
          <h2 className="text-xl font-bold text-indigo-600 mb-3 text-center">
            Built With
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {["React", "Node.js", "Express", "MongoDB", "TailwindCSS"].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>

        {/* Contrast Block */}
        <div className="flex-1 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white p-6 rounded-2xl shadow-md flex flex-col justify-center hover:shadow-xl transition-all duration-200 scale-[1] hover:scale-[1.03]">
          <h2 className="text-xl font-bold mb-2">Why NotePilot?</h2>
          <p className="text-indigo-100 leading-relaxed">
            Because productivity doesn't need to be boring. Write freely,
            organize effortlessly, and access your thoughts anywhere.
          </p>
          <p className="mt-4 text-sm opacity-80 italic">
            ✍ Stay organized. Stay inspired.
          </p>
        </div>
      </div>
    </Layout>
  );
}
