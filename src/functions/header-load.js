import clearScreen from "./clear-screen";
import homePage from "../pages/home-page";
import footerLoad from "./footer-load";

const headerLoad = function () {
    const contentDiv = document.querySelector(".content");

    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header");
    contentDiv.appendChild(headerDiv);

    // -- Header -- 
    // top
    const headerTop = document.createElement("div");
    headerTop.classList.add("header__top");
    headerDiv.appendChild(headerTop);

    const headerTopH1 = document.createElement("h1");
    headerTopH1.innerText = "Wakandine";
    headerTopH1.classList.add("logo");
    headerTop.appendChild(headerTopH1);

    const headerTopToggle = document.createElement("div");
    headerTopToggle.classList.add("toggle");
    headerTop.appendChild(headerTopToggle);

    // bottom
    const headerBottom = document.createElement("div");
    headerBottom.classList.add("header__bottom");
    headerDiv.appendChild(headerBottom);

    const headerBottomP = document.createElement("p");
    headerBottomP.textContent = "A superlative culinary offering in the heart of Wakanda. "
    headerBottom.appendChild(headerBottomP);

    const logo = document.querySelector(".logo");
    logo.addEventListener("click", () => {
        clearScreen();
        headerLoad();
        homePage();
        footerLoad();
    });
};

export default headerLoad;