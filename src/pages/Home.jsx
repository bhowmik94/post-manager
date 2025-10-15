import Layout from "../components/Layout";
import Card from "../components/ui/Card";
import ContrastCard from "../components/ui/ContrastCard";
import Badge from "../components/ui/Badge";
import { CheckCircle, Rocket, Search, BarChart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Layout centered={true}>
      {/* Main Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {/* Hero */}
        <Card className="text-center lg:col-span-3 scale-[1] hover:scale-[1.01]">
          <h2 className="text-3xl font-extrabold text-indigo-600 mb-3">
            Welcome to NotePilot
          </h2>
          <p className="text-gray-600">
            Your personal note-taking companion. Login or sign up to get
            started!
          </p>
        </Card>

        {/* Features */}
        <Card>
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
        </Card>

        {/* Future Plans */}
        <Card>
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
        </Card>

        {/* CTA */}
        <ContrastCard className="text-center">
          <h3 className="text-xl font-bold mb-3">Ready to get started?</h3>
          <p className="mb-4">Jump straight into your notes now.</p>
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-indigo-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100"
          >
            Login Now
          </button>
        </ContrastCard>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col justify-center items-center md:flex-row gap-6 mt-8 mx-auto max-w-5xl">
        {/* Tech Stack */}
        <Card className="w-full max-w-xs">
          <h2 className="text-xl font-bold text-indigo-600 mb-3 text-center">
            Built With
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {["React", "Node.js", "Express", "MongoDB", "TailwindCSS"].map(
              (tech) => (
                <Badge key={tech}>{tech}</Badge>
              ),
            )}
          </div>
        </Card>

        {/* Why NotePilot */}
        <ContrastCard>
          <h2 className="text-xl font-bold mb-2">Why NotePilot?</h2>
          <p className="text-indigo-100 leading-relaxed">
            Because productivity doesn't need to be boring. Write freely,
            organize effortlessly, and access your thoughts anywhere.
          </p>
          <p className="mt-4 text-sm opacity-80 italic">
            ✍ Stay organized. Stay inspired.
          </p>
        </ContrastCard>
      </div>
    </Layout>
  );
}
