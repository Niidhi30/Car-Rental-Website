import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
//import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Process from "./components/Process";
import CarList from "./components/CarList";
//import AboutUs from "./components/AboutUs";
//import Footer from "./components/Footer";
//import Review from "./components/Review";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // run animation only once
    });
  }, []);

  return (
    <>
      <Navbar />
       <Hero/>
       <Brands/>
      <Process/>
       <CarList/>
    </>
  );
};

export default App;