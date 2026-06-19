import { Navigation, Footer } from "./components";
import { Hero, Services, Proof, Contact } from "./sections";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Services />
        <Proof />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
