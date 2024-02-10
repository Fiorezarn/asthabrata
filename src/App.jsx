import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Service from "./components/Service";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Maps from "./components/Maps";
import Portofolio from "./components/Portofolio";
import Carousel from "./components/Carousel/Carousel";
import Reason from "./components/Reason";
import Faq from "./components/Faq";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Service />
      <Pricing />
      <Reason />
      <Portofolio />
      <Carousel />
      <Contact />
      <Faq />
      <Maps />
      <Footer />
    </>
  );
}

export default App;
