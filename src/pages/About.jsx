import Awards from "../components/about/Awards";
import Experience from "../components/about/Experience";
import MyProfile from "../components/about/MyProfile";
import TechSlider from "../components/about/TechSlider";

export default function About() {
  return (
    <>
      <MyProfile />
      <TechSlider />
      <Experience />
      <Awards />
    </>
  );
}
