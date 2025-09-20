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
import BookCardSkeleton from "../../component/BookCardSkeleton";

const Recommanded = () => {
  const [books, setBooks] = useState([]);
  const setOfBooks = books.slice(0, 8);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    if (location.pathname === "/") {
      callGetAllBooks().then((data) => {
      if (isMounted) {
        setBooks(data);
        setIsLoading(false);
      }
      });
    }
    return () => {
      isMounted = false;
    };
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
          {setOfBooks.length > 0 &&
            setOfBooks.map((book, index) => (
              <SwiperSlide key={index}>
                {isLoading ? <BookCardSkeleton /> : <BookCard book={book} />}
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Recommanded;
