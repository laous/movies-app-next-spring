import HeroSliderItem from "./HeroSliderItem";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const HeroSlider = ({
  title,
  setShowModal,
  setMovieLink,
  movieLink,
  upcomingMovies,
}) => {
  return (
    <section className="w-full hidden lg:flex flex-col items-center justify-center space-y-5 m-5">
      <header className="w-full max-w-4xl flex items-center justify-between">
        <h2 className="text-xl">{title ? title : "Top Movies"}</h2>
        {/* <Link href="/" className="cursor-pointer">
          <span className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#FF6969] to-[#E752FF]">
            See more
          </span>
        </Link> */}
      </header>
      {/* <div className="w-full max-w-5xl flex items-center justify-between"> */}
      <Swiper
        spaceBetween={30}
        // centeredSlides={true}
        slidesPerView={1}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper z-20 w-full max-w-5xl flex items-center justify-between"
      >
        {upcomingMovies?.map((movie, index) => (
          <SwiperSlide
            key={index}
            className="w-full flex items-center justify-between overflow-visible"
          >
            <HeroSliderItem
              setMovieLink={setMovieLink}
              setShowModal={setShowModal}
              movieLink={movieLink}
              movie={movie}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* </div> */}
    </section>
  );
};
export default HeroSlider;
