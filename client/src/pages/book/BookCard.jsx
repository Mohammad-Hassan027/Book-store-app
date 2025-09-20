import { getImgUrl } from "../../utils/getImage";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useAuth } from "../../hooks/useAuth";
import { memo } from "react";
import BookCardSkeleton from "../../component/BookCardSkeleton";

const BookCard = ({ book }) => {
  const { AddToCart } = useAuth();
  const handleAddToCart = (book) => {
    AddToCart(book);
  };

  // if (loading) return <BookCardSkeleton />;

  return (
    <div className="p-3 hover:shadow-lg transition duration-300 ease-in-out min-h-[300px]">
      <div className="flex items-center">
        <div className="w-1/3">
          <Link to={`/book/${book._id}`}>
            <img
              src={`${getImgUrl(book?.coverImage)}`}
              alt={book.title}
              className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200 size-auto"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="w-2/3 h-full sm:h-72 p-3 flex flex-col">
          <Link to={`/book/${book._id}`}>
            <h3 className="text-xl font-semibold hover:text-blue-600 mb-2 cursor-pointer line-clamp-2">
              {book.title.length > 38
                ? book.title.substring(0, 38) + "..."
                : book.title}
            </h3>
          </Link>
          <p className="text-gray-600">{book.author}</p>
          <p className="mt-2">
            {book.description.length > 80
              ? book.description.substring(0, 80) + "..."
              : book.description}
          </p>
          <div className="flex justify-between my-4 items-center text-lg">
            <p className="line-through">${book.oldPrice}</p>
            <p className="font-medium">$ {book.newPrice}</p>
          </div>
          <div className="mt-auto">
            <button
              onClick={() => handleAddToCart(book)}
              className="bg-yellow-400 text-white  px-6 space-x-1 flex items-center gap-1 py-2 rounded-md hover:bg-yellow-500 transition duration-300 w-full justify-center cursor-pointer min-h-[44px]"
            >
              <FiShoppingCart className="" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(BookCard);
