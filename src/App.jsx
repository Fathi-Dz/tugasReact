import PageLayout from "./components/Layouts/PageLayout";
import HeroSection from "./components/hero/HeroSection";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Certificate from "./components/certificate/Certificate";
import Gallery from "./components/gallery/Gallery";
import Contener from "./components/contener/Contener";


const App = () => {
  return (
    <PageLayout>
      <HeroSection />
      <About />
      <Projects />
      <Certificate />
      <Gallery />
      <Contener />
    </PageLayout>
  );
}

export default App;