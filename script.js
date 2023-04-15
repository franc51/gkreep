let notes = [];

const popup = document.querySelector(".add-btn");
const popupBox = document.querySelector(".popup-box");
const overlay = document.querySelector(".overlay");
const exitOverlay = document.querySelector(".exit-popup");
const deleteNote = document.querySelector(".remove-btn");

let titleValue = document.getElementById("title");
let descriptionValue = document.getElementById("description");
const addButton = document.querySelector(".add-note-btn");

titleValue.addEventListener("change", (e) => {
titleValue.value = e.target.value;
})
descriptionValue.addEventListener("change", (e) => {
  descriptionValue.value = e.target.value;
  })
popup.addEventListener("click", () => {
  popupBox.classList.add("show-popup");
  overlay.classList.add("show-overlay");
});

exitOverlay.addEventListener("click", () => {
  popupBox.classList.remove("show-popup");
  overlay.classList.remove("show-overlay");
});

addButton.addEventListener("click", () => {
  let note = new Note(titleValue.value, descriptionValue.value);
  notes.push(note);
  console.log(notes);
  refresh();
});

class Note {
  constructor(title, description){
    this.title = title;
    this.description = description;
    this.id = 1;
  }
}

function refresh(){
  notes.map((note) => {
    let infoContainer = document.querySelector(".info");
    let Title = document.createElement("h1");
    let TitleText = document.createTextNode(note.title);
    Title.appendChild(TitleText);
    infoContainer.appendChild(Title);
  } )
}