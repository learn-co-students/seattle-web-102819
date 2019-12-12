function addBook(book) {
  const book_list = document.querySelector("#book-list");
  const div = makeBookCard(book);
  book_list.appendChild(div);
}

function makeBookCard(book) {
  const div = document.createElement("div");
  div.className = "card";
  div.id = `book${book.id}`;
  // div.id = book.id

  const img = document.createElement("img");
  img.src = book.img;

  const h3 = document.createElement("h3");
  h3.textContent = book.title;

  const p = document.createElement("p");
  p.textContent = book.author;

  const edit = document.createElement("button");
  edit.textContent = "Edit";
  edit.addEventListener("click", function() {
    modal.style.display = "block";
    populateEditForm({
      title: div.querySelector("h3").textContent,
      author: div.querySelector("p").textContent,
      img: div.querySelector("img").src,
      id: book.id
    });
    //store the div in the editedNode variable for editing.
    editedNode = div;
  });

  //add all elements to div
  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(edit);

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
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      addBook(data);
    });
}

function updateBook(book) {
  fetch(`http://localhost:3000/books/${book.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(book)
  })
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      editedNode.replaceWith(makeBookCard(data));
      editedNode = null;
    });
}

//EXAMPLE OF DELETE
// fetch(`http://localhost:3000/books/${id}`, {
//   method: "DELETE"
// })

function populateEditForm(book) {
  const editForm = document.querySelector("#edit-form");
  editForm.title.value = book.title;
  editForm.author.value = book.author;
  editForm.cover.value = book.img;
  editForm.bookId.value = book.id;
}

//DOCUMENT FORM EVENT LISTENERS

//new book form
document.addEventListener("DOMContentLoaded", function() {
  document
    .querySelector("#add-form")
    .addEventListener("submit", function(event) {
      event.preventDefault();
      createBook({
        author: event.target.author.value,
        title: event.target.title.value,
        img: event.target.cover.value
      });
    });

  //edit form
  document
    .querySelector("#edit-form")
    .addEventListener("submit", function(event) {
      event.preventDefault();
      modal.style.display = "none";
      updateBook({
        author: event.target.author.value,
        title: event.target.title.value,
        img: event.target.cover.value,
        id: event.target.bookId.value
      });
    });
});
