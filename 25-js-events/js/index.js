let existingComments = [
  "Great meal",
  "Why salmon again??",
  "Your podcast is great"
];

document.addEventListener("DOMContentLoaded", function() {
  existingComments.forEach(function(comment) {
    addComment(createComment(comment));
  });

  let buttonsArray = document.querySelectorAll("button");

  buttonsArray.forEach(function(button) {
    button.addEventListener("click", function(event) {
      document.body.style.backgroundColor = event.target.value;
    });
  });

  document
    .getElementById("new-comment-form")
    .addEventListener("submit", function(event) {
      event.preventDefault();
      //   const userInput = document.getElementById("comment-input").value;
      console.dir(event.target);
      const userInput = event.target.comment.value;
      addComment(createComment(userInput));

      document.getElementById("comment-input").value = "";
    });
});

//create a new DOM node that represents a comment
function createComment(content) {
  const newCommentNode = document.createElement("li");
  newCommentNode.textContent = content;
  return newCommentNode;
}

//add a comment node to the DOM
function addComment(newNode) {
  const commentList = document.querySelector("div#comments ul");
  commentList.appendChild(newNode);
}
