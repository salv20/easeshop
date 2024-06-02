import Nav from "../pages/landingpage/Nav";
import Hero from "../pages/landingpage/Hero";
import Footer from "../pages/landingpage/Footer";
import Collections from "../pages/landingpage/Collections";

const Landing = () => {
  return (
    <main>
      <div className="container mx-auto flex flex-col gap-10">
        <div>
          <Nav />
          <Hero />
        </div>
        <Collections />
        <Footer />
      </div>
    </main>
  );
};

export default Landing;
