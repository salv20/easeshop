import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper/modules";

const Sliders = ({ details }) => {
  return (
    <div>
      {
        <div className="">
          {details.loading && (
            <p className="text-green-500 capitalize text-lg leading-loose">
              loading . . .
            </p>
          )}
          {!details.loading && details.products.length ? (
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
              {details.products.splice(0, 10).map((prod, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={prod.image}
                    alt=""
                    className="Myswiper h-[16rem] sm:h-[13rem] pb-8 w-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            !details.loading &&
            details.error && (
              <p className="text-red-500 font-semibold leading-loose text-lg">
                {`${details.error} please connect to the internet !!`}
              </p>
            )
          )}
        </div>
      }
    </div>
  );
};

export default Sliders;
