import PageLayout from "./components/Layouts/PageLayout";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificate from "./components/Certificate";
import Contener from "./components/Contener";


const App = () => {
  return (
    <PageLayout>
      <HeroSection />
      <About />
      <Projects />
      <Certificate />
      <Contener />
    </PageLayout>
  );
}

export default App;