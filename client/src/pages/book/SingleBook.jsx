import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getImgUrl } from "../../utils/getImage";
import { FiShoppingCart } from "react-icons/fi";
import { callGetBookById } from "../../api/book-api";
import { useAuth } from "../../hooks/useAuth";
import BookCardSkeleton from "./../../component/BookCardSkeleton";

function SingleBook() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  // const book = books.find((b) => b._id === parseInt(id));
  const { AddToCart } = useAuth();
  const handleAddToCart = (book) => {
    AddToCart(book);
  };

  useEffect(() => {
    callGetBookById(id)
      .then((data) => {
        setBook(data);
      })
      .catch((error) => {
        console.error("Failed to fetch book:", error);
        setBook(null); // or show an error component
      });
  }, [id]);

  if (!book || Object.keys(book).length === 0) {
    return <div className="p-50"><BookCardSkeleton /></div> ;
  }

  return (
    <div className="p-5 md:p-20 h-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-15 shadow-2xl p-5 md:p-10 rounded-xl">
        <div className="w-60 h-80 sm:w-64 sm:h-96 flex-shrink-0">
          <img
            className="w-full h-full"
            src={getImgUrl(book?.coverImage)}
            alt={book?.title || "Book cover"}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-wider">
            {book?.title || "Book Title"}
          </h2>
          <div className="flex items-center gap-60">
            <p className="text-xl font-semibold">
              Category:{" "}
              {book?.category && (
                <span className="font-normal">
                  {book.category.charAt(0).toUpperCase() +
                    book.category.slice(1)}
                </span>
              )}
            </p>
            <p className="font-semibold text-xl">
              {book && book?.trending ? "Trending ️✅" : ""}
            </p>
          </div>

          <p className="text-xl font-semibold">
            Description:{" "}
            <span className="font-normal">
              {book ? book?.description : "This is a great book!"}
            </span>
          </p>
          <div className="flex items-center gap-60 font-bold text-2xl">
            <p>
              Old price :{" "}
              <span className="font-semibold text-xl line-through">
                ${book?.oldPrice}
              </span>
            </p>
            <p>
              New price :{" "}
              <span className="font-semibold text-xl">${book?.newPrice}</span>
            </p>
          </div>
          <div className="mt-6">
            <button
              onClick={() => handleAddToCart(book)}
              className="bg-yellow-400 text-white text-2xl  px-6 space-x-1 flex items-center gap-1 py-2 rounded-md hover:bg-yellow-500 transition duration-300 w-full justify-center cursor-pointer"
            >
              <FiShoppingCart className="" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBook;
