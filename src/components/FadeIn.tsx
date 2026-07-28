type FadeInProps = {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
};

export default function FadeIn({ children, delayMs = 0, className = "" }: FadeInProps) {
  return (
    <div className={`fade-in ${className}`} style={{ animationDelay: `${delayMs}ms` }}>
      {children}
    </div>
  );
}
