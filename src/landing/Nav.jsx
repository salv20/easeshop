import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
const Nav = () => {
  const product = useSelector((state) => state);

  return (
    <header className="text-[#ddddde] py-4 items-center gap-6 flex justify-between">
      <h1 className="uppercase font-bold">easestore</h1>

      <div className="hidden lg:flex gap-4">
        <button className="btn-sm">
          <Link>home</Link>
        </button>
        <button className="btn-sm">
          <Link>shop</Link>
        </button>
        <button className="btn-sm">
          <Link>sale</Link>
        </button>
        <button className="btn-sm">
          <Link>blog</Link>
        </button>
        <button className="btn-sm">
          <Link>showcase</Link>
        </button>
      </div>

      <div className="flex gap-4">
        <button className="text-[#cdcdd1] relative bg-[#252526] px-2 py-1.5 items-center rounded-full">
          <Link to="/cart">
            <FaCartShopping className="relative text-xl" />
            <span className="absolute -top-1 left-6 font-bold text-xl text-green-500  z-10">
              {product ? product.length : 0}
            </span>
          </Link>
        </button>
        <button className="btn-sm">
          <Link>login</Link>
        </button>
        <button className="btn-sm hidden sm:flex">
          <Link>signup</Link>
        </button>
      </div>
    </header>
  );
};

export default Nav;
