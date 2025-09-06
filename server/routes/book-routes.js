const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  getBookById,
  addNewBook,
  updateBookById,
  deleteBookById,
} = require("../controllers/book-controllers");
const verifyAdminToken = require("../middlewares/VerifyAdminToken");

router.get("/getAll", getAllBooks);
router.get("/get/:id", getBookById);
router.post("/add", verifyAdminToken, addNewBook);
router.put("/update/:id", verifyAdminToken, updateBookById);
router.delete("/delete/:id", verifyAdminToken, deleteBookById);

module.exports = router;
