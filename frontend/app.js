import "./styles/app.css";
//import "./static/pj.jpg"; //check this

import Book from "./models/Book.js";
import UI from "./UI.js";

document.addEventListener("DOMContentLoaded", () => {
	const ui = new UI();
	ui.renderBooks();
});

document.getElementById("book-form").addEventListener("submit", function (e) {
	const title = document.getElementById("title").value;
	const author = document.getElementById("author").value;
	const year = document.getElementById("year").value;
	const songs = document.getElementById("songs").value;
	const person = document.getElementById("person").value;
	const favorite = document.getElementById("favorite").value;
	const commentary = document.getElementById("commentary").value;

	const image = document.getElementById("image").files;

	const formData = new FormData();
	formData.append("image", image[0]);
	formData.append("title", title);
	formData.append("author", author);
	formData.append("year", year);
	formData.append("songs", songs);
	formData.append("person", person);
	formData.append("favorite", favorite);
	formData.append("commentary", commentary);
	//formData.append('isbn', isbn);

	// for(var pair of formData.entries()) {
	//   console.log(pair[0]+', '+pair[1]);
	// }

	// Instatiating the UI
	const ui = new UI();

	// New Book Object
	const book = new Book(
		title,
		author,
		year,
		songs,
		person,
		favorite,
		commentary
	);

	// Validating User Input
	if (
		title === "" ||
		author === "" ||
		year === "" ||
		songs === "" ||
		person === "" ||
		favorite === "" ||
		commentary === ""
	) {
		ui.renderMessage("Por favor completa todos los campos", "error", 3000);
	} else {
		// Pass the new book to the UI
		ui.addANewBook(formData);
		ui.renderMessage("Nuevo disco agregado correctamente", "success", 2000);
	}

	e.preventDefault();
});

document.getElementById("books-cards").addEventListener("click", (e) => {
	const ui = new UI();
	if (e.target.classList.contains("delete")) {
		ui.deleteBook(e.target.getAttribute("_id"));
		ui.renderMessage("Disco eliminado correctamente", "success", 3000);
	}
	e.preventDefault();
});
