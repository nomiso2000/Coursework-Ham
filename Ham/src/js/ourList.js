const list = document.querySelector(".ourServices__list");
const content = document.querySelector(".ourServices__content");
const itemElements = Array.from(
  document.querySelectorAll(".ourServices__item")
);
import itemsArr from "./ourListItems";

const createContent = ({ image, text }) => {
  return `
            <img class="ourServices__img" src="${image}">
            <p class="ourServices__text">${text}</p>
          `;
};

const onCreateContent = ({ target, currentTarget }) => {
  if (target === currentTarget) return;
  content.innerHTML = "";
  itemElements.map((el) => el.classList.remove("active"));
  target.classList.add("active");
  const article = itemsArr.find((el) => el.title === target.textContent);
  if (article) {
    const markup = createContent(article);
    content.insertAdjacentHTML("afterbegin", markup);
  }
};

const onCreateContentAfterLoaded = ({ target }) => {
  const markup = createContent(itemsArr[0]);
  content.insertAdjacentHTML("afterbegin", markup);
  itemElements[0].classList.add("active");
};

list.addEventListener("click", onCreateContent);
document.addEventListener("DOMContentLoaded", onCreateContentAfterLoaded);
