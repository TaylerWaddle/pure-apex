import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import TopProductCard from "./components/TopProductCard";
import TopProducts from "./components/TopProducts";

const Home = () => {
  return (
    <div>
      <Hero />
      <TopProducts />
      <TopProductCard />
      <AboutUs />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default Home;
