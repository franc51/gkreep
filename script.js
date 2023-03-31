let input = document.getElementById("save-button");

input.addEventListener("click", createNote);

function createNote() {
  let inputText = document.getElementById("description").value;

  let newDiv = document.createElement("div");
  let newH1 = document.createElement("h2");
  let newbtn = document.createElement("button");
  newbtn.innerHTML = "Delete note";
  newH1.innerHTML = inputText;

  newH1.classList.add("note-style");
  newDiv.classList.add("card");
  newbtn.classList.add("delete-button");
  newbtn.setAttribute("id", "delete-button");

  let container = document.getElementById("note-list-container");

  container.appendChild(newDiv);
  newDiv.append(newH1);
  newDiv.append(newbtn);

  inputText = "";
}
