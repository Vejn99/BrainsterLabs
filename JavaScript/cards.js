document
  .querySelector("#marketing-filter")
  .addEventListener("change", marketingFilter);
document
  .querySelector("#coding-filter")
  .addEventListener("change", codingFilter);

document
  .querySelector("#design-filter")
  .addEventListener("change", designFilter);

let cards = document.querySelector(".cards");
let activeMarketing = document.querySelector(".activeMarketing");
let activeCoding = document.querySelector(".activeCoding");
let activeDesign = document.querySelector(".activeDesign");
let loading = document.querySelector("#loadMore");
let currentCards = 6;

function marketingFilter() {
  hideAllCards();
  activeCoding.classList.remove("active");
  activeDesign.classList.remove("active");

  if (document.querySelector("#marketing-filter").checked) {
    activeMarketing.classList.add("active");
    hideAllCards();
    var marketingCards = document.querySelectorAll("#marketing");
    marketingCards.forEach((marketingCard) => {
      marketingCard.style.display = "inline-block";
    });

    document.querySelector("#coding-filter").checked = false;
    document.querySelector("#design-filter").checked = false;
  } else {
    activeMarketing.classList.remove("active");
    showAllCards();
  }
}

function codingFilter() {
  hideAllCards();
  activeMarketing.classList.remove("active");
  activeDesign.classList.remove("active");

  if (document.querySelector("#coding-filter").checked) {
    activeCoding.classList.add("active");
    hideAllCards();
    var codingCards = document.querySelectorAll("#coding");
    codingCards.forEach((codingCard) => {
      codingCard.style.display = "inline-block";
    });

    document.querySelector("#marketing-filter").checked = false;
    document.querySelector("#design-filter").checked = false;
  } else {
    activeCoding.classList.remove("active");
    showAllCards();
  }
}

function designFilter() {
  hideAllCards();
  activeMarketing.classList.remove("active");
  activeCoding.classList.remove("active");

  if (document.querySelector("#design-filter").checked) {
    activeDesign.classList.add("active");
    hideAllCards();
    var designCards = document.querySelectorAll("#design");
    designCards.forEach((designCards) => {
      designCards.style.display = "inline-block";
    });

    document.querySelector("#coding-filter").checked = false;
    document.querySelector("#marketing-filter").checked = false;
  } else {
    activeDesign.classList.remove("active");
    showAllCards();
  }
}

function hideAllCards() {
  var allCards = document.querySelectorAll(".card");

  allCards.forEach((card) => {
    card.style.display = "none";
  });
}

function showAllCards() {
  var allCards = document.querySelectorAll(".card");

  allCards.forEach((card) => {
    card.style.display = "inline-block";
  });
}

loading.addEventListener("click", loadMoreBtn);
function loadMoreBtn() {
  loading.style.backgroundColor = "#ffff";
  for (let index = currentCards; index < currentCards + 6; index++) {
    if (cards[index]) {
      cards[index].style.display = "inline-block";
    }
  }
  currentCards += 6;
  if (currentCards >= cards.length) {
    loading.style.display = "none";
  }
}
