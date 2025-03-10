export default function Container({ children }) {
  return (
    <>
      <div className="sticky top-0 left-0 right-0 z-10 w-full h-[50px] bg-gradient-to-b from-[var(--bg-color)] to-transparent"></div>
      {children}
      <div className="sticky bottom-0 left-0 right-0 z-10 w-full h-[50px] bg-gradient-to-t from-[var(--bg-color)] to-transparent"></div>
    </>
  );
}
