export default function ContrastCard({ children, className = "" }) {
  return (
    <div className={`card-dark ${className}`}>
      {children}
    </div>
  );
}
