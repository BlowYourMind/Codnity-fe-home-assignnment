import { useAnimations } from "./components/AnimationToggle";
import Footer from "./components/footer";
import Header from "./components/header";
const upperBG = `${process.env.PUBLIC_URL}/assets/gradient-background-top.webp`;
const lowerBG = `${process.env.PUBLIC_URL}/assets/gradient-background-bottom.webp`;
export default function Main({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { animationsEnabled } = useAnimations();
  return (
    <div className="relative">
      <img
        className={`absolute left-1/2 top-0 -z-10 -translate-x-1/2 ${
          animationsEnabled ? "animate-pulse-opacity" : ""
        }`}
        src={upperBG}
        alt="upper_background"
        width={1512}
        height={550}
      />
      <Header />
      <div className="max-w-5xl mx-auto pt-40">{children}</div>
      <Footer />
      <img
        className={`absolute -bottom-6 left-1/2 -z-10 -translate-x-1/2 ${
          animationsEnabled ? "animate-pulse-opacity" : ""
        }`}
        src={lowerBG}
        alt="lower_background"
        width={1512}
        height={447}
      />
    </div>
  );
}
