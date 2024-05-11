import Nav from "../pages/landingpage/Nav";
import Hero from "../pages/landingpage/Hero";
import Footer from "../pages/landingpage/Footer";
import Collections from "../pages/landingpage/Collections";

const Landing = () => {
  return (
    <main>
      <div className="container mx-auto">
        <Nav />
        <Hero />
        <Collections />
        <Footer />
      </div>
    </main>
  );
};

export default Landing;
