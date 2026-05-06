type CardProps = {
  children: React.ReactNode,
  className?: string,
};

export default function Card({ children, className }: CardProps) {
  return (
    <div className={`shadow-md rounded-[6px] overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
