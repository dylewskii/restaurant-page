// // --- CSS ---
import 'normalize.css';
import './styles/home.css';
import './styles/menu.css';
import './styles/contact.css';

// --- Functions ---
import headerLoad from './functions/header-load';
import footerLoad from './functions/footer-load';

// --- Pages ---
import homePage from './pages/home-page';

// ---- Initial Page Load ----
headerLoad();
homePage();
footerLoad();
