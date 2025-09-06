import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import BookCard from "../book/BookCard";
import { callGetAllBooks } from "./../../api/book-api";

const Recommanded = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    callGetAllBooks().then((data) => {
      setBooks(data);
    });
  }, []);

  return (
    <div className="pt-5 pb-3 md:px-7 px-2">
      <h2 className="text-3xl font-normal mb-6">Recommanded for you</h2>
      <div className="px-0 md:px-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1180: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {books.length > 0 &&
            books.map((book, index) => (
              <SwiperSlide key={index}>
                <BookCard book={book} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Recommanded;
