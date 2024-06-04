import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../../Variants";

const Collections = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [category, setCategory] = useState("products");

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/${category}`)
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message));

    // TOGGLE ACTIVE CLASS BETWEEEN BUTTONS

    document.querySelectorAll(".sort-btn").forEach((btn) =>
      btn.addEventListener("click", (e) => {
        document
          .querySelectorAll(".sort-btn")
          .forEach((btn) => btn.classList.remove("active"));
        e.target.classList.add("active");
      })
    );
  }, [category]);

  return (
    <motion.section
      variants={fadeIn("up", 0.4)}
      initial="initial"
      whileInView={"animate"}
    >
      {data.length && !error && (
        <div className="flex flex-col gap-14">
          <div className="text-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-center sm:w-[90%] mx-auto">
            <button
              className="sort-btn btn-sm active"
              onClick={() => setCategory("products")}
            >
              all
            </button>

            <button
              className="sort-btn btn-sm"
              onClick={() => {
                setCategory("products/category/men's%20clothing");
              }}
            >
              men&#39;s clothing
            </button>

            <button
              className="sort-btn btn-sm"
              onClick={() =>
                setCategory("products/category/women's%20clothing")
              }
            >
              women&#39;s clothing
            </button>

            <button
              className="sort-btn btn-sm"
              onClick={() => setCategory("products/category/jewelery")}
            >
              jewerly
            </button>

            <button
              className="sort-btn btn-sm"
              onClick={() => setCategory("products/category/electronics")}
            >
              electronics
            </button>
          </div>

          <div className="grid smm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-4 md:gap-x-8">
            {data?.map((DB, index) => (
              <div
                className="border-2 py-3 grid gap-2 text-center shadow-lg shadow-[#4e5b7a] bg-white  rounded-lg"
                key={index}
              >
                <img
                  className="h-[250px] w-full rounded-xl"
                  src={DB.image}
                  alt={DB.title.split(" ").splice(0, 1)}
                />

                <h3 className="font-serif font-bold">
                  {DB.title.split(" ", 3).join(" ")}
                </h3>
                <div className="flex flex-col gap-2 sm:flex-row justify-around">
                  <p className="font-bold ">${DB.price}</p>
                  <p className="flex justify-center gap-1 text-lg text-orange-400">
                    {Array(Math.round(DB.rating.rate))
                      .fill(0)
                      .map((_, index) => (
                        <FaStar key={index} />
                      ))}
                  </p>
                </div>
                <div className="flex flex-col gap-y-4 mx-auto sm:flex-row gap-2 justify-around mt-2">
                  <button>
                    <Link to={`/${DB.id}`} className="btn-shop">
                      quick view
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Collections;
