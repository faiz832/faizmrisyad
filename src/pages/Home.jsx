import HeroSection from "../components/home/HeroSection";
import Slider from "../components/home/Slider";
import AboutMe from "../components/home/AboutMe";
import MyWork from "../components/home/MyWork";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Slider />
      {/* <AboutMe /> */}
      <MyWork />
    </>
  );
}
