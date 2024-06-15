import { useDispatch, useSelector } from "react-redux";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { AddCart, RemoveCart } from "../redux/productAction";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

const Cart = () => {
  let state = useSelector((state) => state);
  const dispatch = useDispatch();

  if (localStorage.easeArray) {
    const storedData = JSON.parse(localStorage.getItem("easeArray"));
    state = storedData;
  }

  const addToCartFunc = (product) => {
    dispatch(AddCart(product));
  };

  const RemoveFromCartFunc = (product) => {
    dispatch(RemoveCart(product));
  };

  return (
    <motion.section
      variants={fadeIn("up")}
      initial="initial"
      whileInView={"animate"}
    >
      <div className="container mx-auto my-8">
        <div className="text-white flex flex-col gap-6">
          {state && state.length ? (
            state.map((product, index) => (
              <div
                key={index}
                className="flex flex-col rounded-2xl p-2 md:flex-row border-2 mx-auto sm:w-[75%] border-white justify-around gap-8 lg:gap-10 items-center"
              >
                <div>
                  <img
                    className="h-[20rem] w-[25rem] rounded-xl shadow-md shadow-white border-2"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="flex flex-col gap-2 text-center">
                  <h3 className="uppercase font-bold text-lg">
                    {product.category}
                  </h3>
                  <h1 className=" font-serif">{product.title}</h1>

                  <p className=" text-xl font-bold text-orange-400">
                    $ {Number(product.price)} x {product.qty} = $
                    {(Number(product.price) * product.qty).toFixed(2)}{" "}
                  </p>
                  <div className="flex justify-around items-center mt-2">
                    <button
                      onClick={() => addToCartFunc(product)}
                      className="cartBtn border-2 w-8 h-8"
                    >
                      <FaPlus className=" mx-auto" />
                    </button>
                    <button
                      onClick={() => RemoveFromCartFunc(product)}
                      className="cartBtn border-2 w-8 h-8"
                    >
                      <FaMinus className=" mx-auto" />
                    </button>
                  </div>
                  <button className="mt-2">
                    <Link
                      to="/"
                      className="cartBtn px-6 py-1.5 w-fit uppercase text-sm leading-loose font-bold border-2 tracking-widest border-[#16494a]"
                    >
                      keep shopping
                    </Link>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col gap-4 items-center">
              <h3 className="mt-[30%] text-green-700 text-lg capitalize font-bold  md:text-2xl">
                your cart is empty !!
              </h3>
              <button>
                <Link
                  to="/"
                  className="cartBtn px-6 py-1.5 w-fit uppercase text-sm leading-loose font-bold border-2 tracking-widest border-[#16494a]"
                >
                  shop now
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Cart;
