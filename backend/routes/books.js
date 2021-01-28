const { Router } = require("express");
const router = Router();

const path = require("path");
const { unlink } = require("fs-extra");

const Book = require("../models/Book");

router.get("/", async (req, res) => {
	const books = await Book.find().sort("-_id");
	res.json(books);
});

router.post("/", async (req, res) => {
	const { title, author, year, songs, person, favorite, commentary } = req.body;
	const imagePath = "/uploads/" + req.file.filename;
	const newBook = new Book({
		title,
		author,
		year,
		songs,
		person,
		favorite,
		commentary,
		imagePath,
	});
	console.log(newBook);
	await newBook.save();
	res.json({ message: "Disco Guardado" });
});

router.delete("/:id", async (req, res) => {
	const book = await Book.findByIdAndDelete(req.params.id);
	await unlink(path.resolve("./backend/public/" + book.imagePath));
	res.json({ message: "Disco Eliminado" });
});

module.exports = router;
