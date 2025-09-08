const Book = require("../models/book-model");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    if (books.length > 0) {
      res.status(200).json({
        success: true,
        message: "Books retrieved successfully",
        data: books,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "No books found",
        data: [],
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error while retrieving books",
      error: error.message,
    });
  }
};
const getBookById = async (req, res) => {
  const bookId = req.params.id;
  try {
    const book = await Book.findById(bookId);
    if (book) {
      res.status(200).json({
        success: true,
        message: "Book retrieved successfully",
        data: book,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "No books found",
        data: [],
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving book",
      error: error.message,
    });
  }
};
const addNewBook = async (req, res) => {
  const {
    title,
    description,
    category,
    trending,
    coverImage,
    oldPrice,
    newPrice,
  } = req.body;
  try {
    const newBook = await Book.create({
      title,
      description,
      category,
      trending,
      coverImage,
      oldPrice,
      newPrice,
    });

    if (req.body) {
      res.status(201).json({
        success: true,
        message: "Book added successfully",
        data: {
          title,
          description,
          category,
          trending,
          coverImage,
          oldPrice,
          newPrice,
        },
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Error adding book", error });
  }
};
const updateBookById = async (req, res) => {
  const bookId = req.params.id;
  const {
    title,
    description,
    category,
    trending,
    coverImage,
    oldPrice,
    newPrice,
  } = req.body;
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      bookId,
      {
        title,
        description,
        category,
        trending,
        coverImage,
        oldPrice,
        newPrice,
      },
      { new: true }
    );
    if (updatedBook) {
      res.status(200).json({
        success: true,
        message: "Book updated successfully",
        data: updatedBook,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "No books found",
        data: [],
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating book",
      error: error.message,
    });
  }
};
const deleteBookById = async (req, res) => {
  const bookId = req.params.id;
  try {
    const deletedBook = await Book.findByIdAndDelete(bookId);
    if (deletedBook) {
      res.status(200).json({
        success: true,
        message: "Book deleted successfully",
        data: deletedBook,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "No books found",
        data: [],
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting book",
      error: error.message,
    });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  addNewBook,
  updateBookById,
  deleteBookById,
};
