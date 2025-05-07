import Header from "./components/header";

export default function Main({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-background ">
      <Header />
      <div className="min-h-screen mt-40 max-w-5xl mx-auto">{children}</div>
      {/* <Footer /> */}
    </div>
  );
}
