type Props = { size?: "sm" | "lg" };
export default function Wordmark({ size = "sm" }: Props) {
  return (
    <a href="/" className={`wordmark wordmark--${size}`} aria-label="DULFER Cement home">
      <img src="/dulferlogo.jpeg" alt="DULFER Cement" />
    </a>
  );
}
