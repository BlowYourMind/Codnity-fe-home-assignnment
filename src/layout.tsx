import Header from "./components/header";

export default function Main({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-background">
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
}
