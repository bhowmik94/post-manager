export default function Wrapper({ children, centered = true }) {
  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 relative overflow-hidden
      ${centered ? "flex items-center justify-center" : ""}`}
    >
      {/* Decorative circles */}
      <div className="absolute top-10 left-[-10%] w-72 h-72 bg-indigo-300 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-[-15%] w-96 h-96 bg-indigo-300 rounded-full opacity-20"></div>
      {children}
    </div>
  );
}
