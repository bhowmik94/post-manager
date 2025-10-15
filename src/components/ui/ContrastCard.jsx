export default function ContrastCard({ children, className = "" }) {
  return <div className={`card-dark card-hover ${className}`}>{children}</div>;
}
