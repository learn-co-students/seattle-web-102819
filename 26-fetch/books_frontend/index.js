function addBook(book) {
  const book_list = document.querySelector("#book-list");
  const div = makeBookCard(book);
  book_list.appendChild(div);
}

function makeBookCard(book) {
  const div = document.createElement("div");
  div.className = "card";
  // div.id = book.id

  const img = document.createElement("img");
  img.src = book.img;

  const h3 = document.createElement("h3");
  h3.textContent = book.title;

  const p = document.createElement("p");
  p.textContent = book.author;

  //add all elements to div
  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);

  return div;
}

function showBooks(bookArray) {
  bookArray.map(book => {
    addBook(book);
  });
}

fetch("http://localhost:3000/books")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    showBooks(data);
  });

function createBook(book) {
  fetch("http://localhost:3000/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(book)
  });
}


document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const authorName = event.target.author.value;
    const bookTitle = event.target.title.value;
    const bookCover = event.target.cover.value;
    const newBook = {
      author: authorName,
      title: bookTitle,
      img: bookCover
    }
    createBook(newBook)
    addBook(newBook)
  })
});
