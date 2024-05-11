import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-[#ddddde] capitalize py-8">
      <article className="grid gap-4 grid-cols-2 md:grid-cols-4 justify-between">
        <div className="">
          <h1 className="uppercase font-bold">easestore</h1>
          <h3>luxury & simplicity</h3>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold pb-1">products</h3>
          <Link>men</Link>
          <Link>women</Link>
          <Link>jewelry</Link>
          <Link>electronic</Link>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold pb-1">contact us</h3>
          <Link>about us</Link>
          <Link>blog</Link>
          <Link>feedback</Link>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="font-semibold pb-1">socials</h3>
          <div className="flex gap-2 text-lg">
            <button className="btn-sm p-2">
              <FaTwitter />
            </button>
            <button className="btn-sm">
              <FaLinkedin />
            </button>
            <button className="btn-sm p-2">
              <FaFacebook />
            </button>
          </div>
        </div>
      </article>

      <article></article>
    </footer>
  );
};

export default Footer;
