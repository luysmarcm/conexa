import AboutUsSection from "components/AboutUsSection";
import AlliesSection from "components/AlliesSection";
import CountdownSection from "components/CountdownSection";
import PricingPlans from "components/PricingPlans";
import SeoComponent from "components/SeoComponent";
import HeroSection from "../components/HeroSection";
import Hero from "../components/HeroSection";
import Layout from "../components/Layout";


export default function Home() {
  return (
		<Layout>
			<SeoComponent title="Conexa" description="" />
			<HeroSection />
			<AboutUsSection />
			<CountdownSection />
			<PricingPlans />
			<AlliesSection />
		</Layout>
	);
}
