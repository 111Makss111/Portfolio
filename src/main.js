// core version + navigation, pagination modules:
import Swiper from "swiper";
// Додатково імпортуємо модулі, які нам точно знадобляться
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
});

const mobileMenu = document.querySelector(".backdrop");
const openMenuBtn = document.querySelector(".header-button");
const closeMenuBtn = document.querySelector(".backdrop-close-btn");

openMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("is-open");
});

closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open");
});
