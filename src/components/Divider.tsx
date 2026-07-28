type DividerProps = {
  className?: string;
};

export default function Divider({ className = "" }: DividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center gap-3 ${className}`}
    >
      <span className="h-px w-10 bg-gold/60" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
      <span className="h-px w-10 bg-gold/60" />
    </div>
  );
}
