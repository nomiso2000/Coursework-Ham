import photos from "./gallery.json";
const selectList = document.querySelector(".amazing-section__list");
const items = Array.from(document.querySelectorAll(".amazing-section__item"));
const galleryList = document.querySelector(".amazing-section__gallery");
const section = document.querySelector(".amazing-section");
const button = document.querySelector(".amazing-section__button");

const photosToLoad = photos.slice(30, 42);

const createItem = ({ image }) => {
  return `<li class="amazing-section__article"><img class="amazing-section__photo" src="${image}" alt=""></li>`;
};

const createMarkup = (articles, target) => {
  galleryList.innerHTML = "";
  section.classList.remove("amazing-section--midified");
  button.classList.remove("hidden");
  const markup = articles.map((el) => createItem(el)).join("");
  galleryList.insertAdjacentHTML("afterbegin", markup);
  items.map((el) => el.classList.remove("activeSection"));
  if (!target) return;
  target.classList.add("activeSection");
};

const onSelectSection = ({ target, currentTarget }) => {
  if (target === currentTarget) return;
  if (target.textContent === "All") {
    createMarkup(photosToLoad, target);
    return;
  }
  const selected = photos.filter((el) => el.type === target.textContent);
  createMarkup(selected, target);
};

const onload = (e) => {
  createMarkup(photosToLoad);
  items[0].classList.add("activeSection");
};

const onLoadMore = ({ target }) => {
  const markup = photos
    .slice(26, 38)
    .map((el) => createItem(el))
    .join("");
  galleryList.insertAdjacentHTML("beforeend", markup);
  section.classList.add("amazing-section--midified");
  button.classList.add("hidden");
};

selectList.addEventListener("click", onSelectSection);
document.addEventListener("DOMContentLoaded", onload);
button.addEventListener("click", onLoadMore);
