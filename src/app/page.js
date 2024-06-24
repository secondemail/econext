import Footer from "./_components/Footer";
import BestSeller from "./_components/BestSeller";
import Deals from "./_components/Deals";
import FeaturedCategory from "./_components/FeaturedCategory";
import Hero from "./_components/Hero";
import PopularProducts from "./_components/PopularProducts";
import SomeProducts from "./_components/SomeProducts";

export default function Home() {
  return (
    <div>
      <Hero/>
      <FeaturedCategory/>
      <PopularProducts/>
      <BestSeller/>
      <Deals/>
      <SomeProducts/>
    </div>
  );
}
