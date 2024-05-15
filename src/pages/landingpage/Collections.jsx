import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

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
    <section className="flex flex-col gap-14">
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
          onClick={() => setCategory("products/category/women's%20clothing")}
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

      <div className="grid smm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-4 md:gap-x-8">
        {data?.map((DB, index) => (
          <div
            className="border-2 text-center shadow-lg shadow-[#4e5b7a] bg-white  rounded-lg"
            key={index}
          >
            <img
              className="h-[250px] w-full rounded-xl"
              src={DB.image}
              alt={DB.title.split(" ").splice(0, 1)}
            />
            <h3>{DB.title.split(" ").splice(0, 3)}</h3>
            <p className="flex justify-center gap-1 text-lg text-orange-400">
              {Array(Math.floor(DB.rating.rate))
                .fill(0)
                .map((_, index) => (
                  <FaStar key={index} />
                ))}
            </p>

            <p>$ {DB.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;
