
interface TextProps {
  children: React.ReactNode;
}

export function Text({ children }: TextProps) {
  return (
    <>
      <p className="text">{children}</p>
    </>
  );
}
