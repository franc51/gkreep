function deleteCard() {
  let deleted = document.getElementById("card");
  for (let i = 0; i < deleted.length; i++) {
    deleted[i].classList.add("remove");
    console.log(deleted);
  }
}

let removeCard = document.getElementById("delete-card");
removeCard.addEventListener("click", deleteCard);
