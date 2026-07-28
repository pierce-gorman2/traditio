type DividerProps = {
  className?: string;
};

export default function Divider({ className = "" }: DividerProps) {
  return (
    <hr
      aria-hidden="true"
      className={`h-px w-16 border-0 bg-gold ${className}`}
    />
  );
}
