type MainHeaderProps = {
  children: React.ReactNode,
}

export default function MainHeader({ children }: MainHeaderProps) {
  return(
    <header className="w-full h-[4rem] flex items-center fixed top-[0] left-[0] bg-stone-700 shadow-md px-[1rem] z-5 justify-between">
      {children}
    </header>
  );
}
