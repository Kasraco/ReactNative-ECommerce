import Apple from "../components/home/Apple";
import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import Marketing from "../components/home/Marketing";
import Navbar from "../components/home/Navbar";
import UseMobile from "../components/home/UseMobile";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <hr />
      <Marketing />
      <hr />
      <Apple />
      <hr />
      <UseMobile />

      <Footer />
    </>
  );
};

export default Home;
