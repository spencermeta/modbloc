import { Footer, Navbar } from "../components";
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from "../sections";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
    </div>
    <div className="relative">
      <GetStarted title={<>Seguridad y Privacidad</>} />
      <div className="gradient-03 z-0" />
      <WhatsNew />
      <div className="gradient-03 z-0" />
      <GetStarted title={<>Control del Tiempo y Pago</>} />
    </div>
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <Footer />
  </div>
);

export default Page;
