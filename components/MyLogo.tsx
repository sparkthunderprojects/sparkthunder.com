/**
 * The MySparkthunder logo: the Sparkthunder wordmark with a hand-lettered "My"
 * in front of it and two twinkling sparks, as on mysparkthunder.com.
 */
export function MyLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`my-logo ${className}`}>
      <span aria-hidden="true" className="my-logo-my">
        <span className="my-logo-mark" />
        <i className="my-spark my-spark-a" />
        <i className="my-spark my-spark-b" />
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/sparkthunder-logo.png" alt="" width={960} height={160} className="my-logo-word" />
    </span>
  );
}
