import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FaCaretLeft, FaStar } from "react-icons/fa";
import { BeatLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { AddCart } from "../../redux/productAction";

import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { fadeIn } from "../../../Variants";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const cartAddiction = (product) => {
    dispatch(AddCart(product));
    toast.success("Cart added successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    localStorage.setItem(JSON.stringify(product), "easeProduct");
  };
  return (
    <motion.section
      variants={fadeIn("up")}
      initial="initial"
      whileInView={"animate"}
      className="text-white"
    >
      <div className="container py-10 mx-auto">
        {loading ? (
          <p className="text-green-500 mt-[35%] text-center capitalize text-lg leading-loose">
            <BeatLoader
              color={"green"}
              loading={true}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </p>
        ) : !loading && product ? (
          <div className="flex flex-col md:flex-row justify-between mt-10 gap-10 items-center">
            <div className="">
              <img
                className="h-[400px] w-[1000px] md:w-[1500px] rounded-xl shadow-md shadow-white border-2"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="uppercase font-bold text-lg">
                {product.category}
              </h3>
              <h1 className=" font-serif">{product.title}</h1>
              <h3 className="text-[#bab5bb]">{product.description}.</h3>

              <div className="items-center flex justify-between">
                <p className=" text-xl font-bold text-orange-400">
                  $ {product.price}{" "}
                </p>
                <p className="flex justify-center gap-1 text-lg text-orange-400">
                  {Array(Math.round(product.rating.rate))
                    .fill(0)
                    .map((_, index) => (
                      <FaStar key={index} />
                    ))}
                </p>
              </div>
              <div className="">
                <div className="flex gap-2 justify-around mt-4">
                  <button className="text-[40px] text-orange-400">
                    <Link to="/">
                      <FaCaretLeft />
                    </Link>
                  </button>
                  <button
                    onClick={() => cartAddiction(product)}
                    className=" btn-shop"
                  >
                    add to cart
                  </button>

                  <ToastContainer />

                  <button
                    className=" btn-shop"
                    onClick={() => navigate("/cart")}
                  >
                    view cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          !loading &&
          error && (
            <div className="mt-[30%] text-red-700 text-lg capitalize font-bold text-center md:text-2xl">
              <p>{error} please connect to the internet !!</p>
            </div>
          )
        )}
      </div>
    </motion.section>
  );
};

export default ProductDetail;
