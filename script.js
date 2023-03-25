class Note {
  constructor() {
    this.title = title;
    this.description = description;
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

var notes = [];
const saveNote = document.getElementById("save-button");

function addNote() {
  const newDivCardNote = document.createElement("div");
  const newTitleCard = document.createElement("textarea");
  const newDescriptionCard = document.createElement("textarea");

  newTitleCard.innerHTML = this.getTitle();
  newDescriptionCard.innerHTML = this.getDescription();

  newDivCardNote.appendChild(newTitleCard);
  newDivCardNote.appendChild(newDescriptionCard);

  document.body.appendChild(newDivCardNote);

  newTitleCard.addEventListener("keyup", () =>
    this.setTitle(newTitleCard.value)
  );
  newDescriptionCard.addEventListener("keyup", () =>
    this.setDescription(newDescriptionCard.value)
  );
}

saveNote.addEventListener("click", () => {
  const titleNote = document.getElementById("title");
  const descriptionNote = document.getElementById("description");

  const newNote = new Note(titleNote.value, descriptionNote.value);
  notes.push(newNote);

  if (titleNote) {
    titleNote.value = "";
  }
  if (descriptionNote) {
    descriptionNote.value = "";
  }
  console.log(newNote);
});
