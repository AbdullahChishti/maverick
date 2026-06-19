import { Navigation, Footer } from "./components";
import {
  Hero,
  About,
  Vision,
  Services,
  Approach,
  Industries,
  WhyMaverick,
  Contact,
} from "./sections";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Vision />
        <Services />
        <Approach />
        <Industries />
        <WhyMaverick />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
