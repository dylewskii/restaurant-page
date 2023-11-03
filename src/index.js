// --- Entry ---
import 'normalize.css';
import './styles/home.css';
import './styles/menu.css';
import './styles/contact.css';

// --- Functions ---
import headerLoad from './functions/header-load';
import footerLoad from './functions/footer-load';
import clearScreen from './functions/clear-screen';

// --- Pages ---
import homePage from './pages/home-page';
import reservationsPage from './pages/reservations-page';
import loungePage from './pages/lounge';
// menu page


// ---- Main ----
// pageLoad();
headerLoad();
homePage();
footerLoad();

const reserveBtn = document.querySelector(".reserveBtn");
reserveBtn.addEventListener("click", () => {
    clearScreen();
    headerLoad();
    reservationsPage();
    footerLoad();
});

const loungeBtn = document.querySelector(".loungeBtn");
loungeBtn.addEventListener("click", () => {
    clearScreen();
    headerLoad();
    loungePage();
    footerLoad();
});

// const menuBtn = document.querySelector(".menuBtn");
// menuBtn.addEventListener("click", () => {
//     clearScreen();
//     headerLoad();
//     menuPage();
//     footerLoad();
// });