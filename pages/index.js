import { Footer, Navbar } from "../components";
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew } from "../sections";
import seguridad from "../public/seguridad.png";
import tiempo from "../public/tiempo.png";
import { startingFeaturess } from "../constants";
import { startingFeatures } from "../constants";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
    </div>
    <div className="relative">
      <GetStarted img={seguridad} alt="seguridad" title={<>Security and Privacy</>} sub="Reservation" text={startingFeaturess} />
      <div className="gradient-03 z-0" />
      <WhatsNew />
      <div className="gradient-03 z-0" />
      <GetStarted img={tiempo} alt="tiempo" title={<>Time Control and Payment</>} sub="Autonomy" text={startingFeatures} />
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
