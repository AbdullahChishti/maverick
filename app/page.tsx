import { Navigation, Footer } from "./components";
import { Hero, Founders, Services, Contact } from "./sections";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Founders />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
