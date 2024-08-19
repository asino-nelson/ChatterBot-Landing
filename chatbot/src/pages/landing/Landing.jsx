import Hero from "../../components/hero/Hero";
import Products from "../../components/products/Products";
import Testimonials from "../../components/testimonials/Testimonials";
import News from "../../components/news/News";
import JoinUs from "../../components/joinUs/JoinUs";
import ValueProp from "../../components/whyUs/ValueProp";

const Landing = () => {
  return (
    <div>
      <Hero />
      <ValueProp />
      <Products />
      <Testimonials />
      <News />
      <JoinUs />
    </div>
  );
};

export default Landing;
