import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import  swal  from "sweetalert";
import { callGetBookById, callUpdateBook } from "../../api/book-api";
import InputField from "./../../component/InputField";
import SelectField from "./../../component/SelectField";
import SkeletonField from "../../component/SkeletonField";

function UpdateBook() {
  const { id } = useParams();
  const { register, handleSubmit, setValue, reset } = useForm();
  const [bookData, setBookData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await callGetBookById(id);
        setBookData(response);
      } catch (err) {
        console.error("Error fetching book:", err);
        setError("Failed to load book data.");
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  useEffect(() => {
    if (bookData && Object.keys(bookData).length > 0) {
      setValue("title", bookData.title);
      setValue("description", bookData.description);
      setValue("category", bookData.category);
      setValue("trending", bookData.trending);
      setValue("oldPrice", bookData.oldPrice);
      setValue("newPrice", bookData.newPrice);
      setValue("coverImage", bookData.coverImage);
    }
  }, [bookData, setValue]);

  const onSubmit = (data) => {
    const updateBookData = {
      title: data.title,
      description: data.description,
      category: data.category,
      trending: data.trending,
      oldPrice: Number(data.oldPrice),
      newPrice: Number(data.newPrice),
      coverImage: data.coverImage || bookData.coverImage,
    };
    try {
      callUpdateBook(id, updateBookData);
      swal("Book Updated", "Your book is updated successfully!", "success");
      // await refetch();
      reset();
    } catch (error) {
      console.log("Failed to update book.", error);
      alert("Failed to update book.");
    }
  };
  return (
    <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Update Book</h2>
      {loading ? (
        <div className="space-y-4">
          <SkeletonField />
          <SkeletonField height="h-24" />
          <SkeletonField height="h-10" width="w-1/2" />
          <SkeletonField height="h-5" width="w-1/3" />
          <SkeletonField />
          <SkeletonField />
          <SkeletonField />
          <SkeletonField height="h-10" width="w-1/2" />
        </div>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="transition-opacity duration-300 opacity-100"
        >
          <InputField
            label="Title"
            name="title"
            placeholder="Enter book title"
            register={register}
          />

          <InputField
            label="Description"
            name="description"
            placeholder="Enter book description"
            type="textarea"
            register={register}
          />

          <SelectField
            label="Category"
            name="category"
            options={[
              { value: "", label: "Choose A Category" },
              { value: "business", label: "Business" },
              { value: "technology", label: "Technology" },
              { value: "fiction", label: "Fiction" },
              { value: "horror", label: "Horror" },
              { value: "adventure", label: "Adventure" },
            ]}
            register={register}
          />
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                {...register("trending")}
                className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm font-semibold text-gray-700">
                Trending
              </span>
            </label>
          </div>

          <InputField
            label="Old Price"
            name="oldPrice"
            type="number"
            placeholder="Old Price"
            register={register}
          />

          <InputField
            label="New Price"
            name="newPrice"
            type="number"
            placeholder="New Price"
            register={register}
          />

          <InputField
            label="Cover Image URL"
            name="coverImage"
            type="text"
            placeholder="Cover Image URL"
            register={register}
          />

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-bold rounded-md"
          >
            Update Book
          </button>
        </form>
      )}
    </div>
  );
}

export default UpdateBook;
