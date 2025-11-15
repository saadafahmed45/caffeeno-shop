import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Descover_section from "./components/Descover_section";
import Feature_Menu from "./components/Feature_Menu";
import DesBoxSection from "./components/DesBoxSection";
import MugSec from "./components/MugSec";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
      {/* <Navbar /> */}
      <Hero />
      <Descover_section />
      <Feature_Menu />
      <DesBoxSection />
      <MugSec />
    </main>
  );
}
