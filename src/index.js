// // --- CSS ---
import 'normalize.css';
import './styles/styles.css';

// --- Functions ---
import headerLoad from './functions/header-load';
import footerLoad from './functions/footer-load';

// --- Pages ---
import homePage from './pages/home-page';

// ---- Initial Page Load ----
headerLoad();
homePage();
footerLoad();
