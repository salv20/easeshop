import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper/modules";

import FetchFunc from "../../redux/productAction";
import { connect } from "react-redux";
import { useEffect } from "react";

const Sliders = ({ products, fetchProduct }) => {
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      {
        <div>
          {(!products || products?.loading) && (
            <p className="text-green-500 capitalize text-lg leading-loose">
              loading . . .
            </p>
          )}

          {!products?.loading && products?.product.length ? (
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
              {products?.product.splice(0, 10).map((prod, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={prod.image}
                    alt=""
                    className="Myswiper h-[17rem] sm:h-[13rem] pb-8 w-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            !products?.loading &&
            products?.error && (
              <p className="text-red-500 font-semibold leading-loose text-lg">
                {`${products?.error} please connect to the internet !!`}
              </p>
            )
          )}
        </div>
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: () => dispatch(FetchFunc()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sliders);
