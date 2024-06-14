import Nav from "../landing/Nav";
import Hero from "../landing/Hero";
import Footer from "../landing/Footer";
import Collections from "../landing/Collections";

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
