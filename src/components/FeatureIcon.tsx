type Name = "bag" | "drop" | "layers" | "building" | "research";
const paths: Record<Name, React.ReactNode> = {
  bag: <><path d="M7 7h10l1 14H6L7 7Z"/><path d="M9 7V5a3 3 0 0 1 6 0v2M8 11h8"/></>,
  drop: <><path d="M12 2.8S5 10 5 15a7 7 0 0 0 14 0c0-5-7-12.2-7-12.2Z"/><path d="M9 15.5a3 3 0 0 0 3 3"/></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></>,
  building: <><path d="M4 21V5l10-2v18M14 9h6v12M2 21h20"/><path d="M7 8h2m-2 4h2m-2 4h2m8-4h1m-1 4h1"/></>,
  research: <><circle cx="10" cy="10" r="6"/><path d="m14.5 14.5 6 6M8 10h4m-2-2v4"/></>,
};
export default function FeatureIcon({ name }: { name: Name }) {
  return <span className="feature-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg></span>;
}
