class Note {
  constructor() {
    this.title = null;
    this.description = null;
  }
  setTitle(title) {
    this.title = title;
  }
  setDescription(description) {
    this.description = description;
  }
  getTitle() {
    return this.title;
  }
  getDescription() {
    return this.description;
  }
}
const description = document.getElementById("description");
let notes = [];
const noteTitle = document.createElement("input");
noteTitle.type = "text";
noteTitle.className = "note-title";
noteTitle.setAttribute("placeholder", "Title");
const takeNote = document.getElementById("newNote");
const hideNote = document.getElementById("overlay");
const container = document.getElementById("note-list-container");
let clicked = false;
function showNewNote() {
  if (clicked) {
    return;
  } else {
    clicked = true;

    let newNote = new Note();
    notes.push(newNote);
    takeNote.prepend(noteTitle);
    description.classList.add("expand");
  }
}
noteTitle.addEventListener("keyup", (e) => {
  if (e.target.value != null && e.target.value != "") {
    notes[notes.length - 1].setTitle(e.target.value);
  }
});
description.addEventListener("keyup", (e) => {
  notes[notes.length - 1].setDescription(e.target.value);
});
// trebuie sa cream un obiect atunci cand dam click pe notita,
// apoi il adaugam direct in array, apoi folosim obiectul din,
// array si ii modificam titlul si descrierea din null in ce avem nevoie

takeNote.addEventListener("click", showNewNote);

function hideNewNote() {
  clicked = false;
  takeNote.removeChild(noteTitle);
  description.classList.remove("expand");
  description.value = "";
  noteTitle.value = "";
  console.log(notes);
  //   showNotes();
}

hideNote.addEventListener("click", hideNewNote);

// function showNotes() {
//   notes.forEach((note) => {
//     const notediv = document.createElement("div");
//     noteTitle.value = note.title;
//     description.value = note.description;
//     notediv.appendChild(noteTitle);
//     notediv.appendChild(description);
//     container.appendChild(notediv);
//   });
// }
