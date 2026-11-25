type Social = "facebook" | "instagram" | "linkedin";
export default function SocialIcon({ name }: { name: Social }) {
  if (name === "facebook") return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.6 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.3H7.7V13h2.7v8h3.2Z"/></svg>;
  if (name === "instagram") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.7" cy="6.6" r="1.1" fill="currentColor"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 8.5h3.2V19H5V8.5Zm1.6-5a1.85 1.85 0 1 1 0 3.7 1.85 1.85 0 0 1 0-3.7ZM10.2 8.5h3.1v1.4h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.1 3.9 4.8V19h-3.2v-5.3c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V19h-3.2V8.5Z"/></svg>;
}
