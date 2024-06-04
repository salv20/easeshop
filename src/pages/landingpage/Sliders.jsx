import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper/modules";

const Sliders = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p className="text-green-500 capitalize text-lg leading-loose">
          <BeatLoader
            color={"green"}
            loading={true}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </p>
      ) : !loading && products.length ? (
        <Swiper
          breakpoints={{
            900: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            550: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            450: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
        >
          {products.splice(0, 10).map((prod, index) => (
            <SwiperSlide key={index}>
              <img
                src={prod.image}
                alt=""
                className="Myswiper rounded-md h-[17rem] sm:h-[13rem] mb-10 w-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        !loading &&
        error && (
          <div className=" text-red-700 text-lg capitalize font-bold text-center md:text-2xl">
            <p>{error} please connect to the internet !!</p>
          </div>
        )
      )}
    </div>
  );
};

export default Sliders;
