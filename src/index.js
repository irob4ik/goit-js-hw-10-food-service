import './styles.css';
import cardTemps from './templates/menu-cards.hbs';
import menuItems from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
    menuContainer: document.querySelector('.js-menu'),
    indexBody: document.body,
    themeSwitch: document.querySelector('#theme-switch-toggle'),
};

const savedData = localStorage.getItem('theme');

// Set page theme

if (savedData === null || Theme.LIGHT) {
    refs.indexBody.classList.add(Theme.LIGHT);
}

if (savedData === Theme.DARK) {
    refs.indexBody.classList.add(Theme.DARK);
    refs.themeSwitch.checked = true;
}

// Theme switch

refs.themeSwitch.addEventListener('change', changeTheme);

function changeTheme(evt) {
    let theme;

    if (evt.currentTarget.checked) {
        refs.indexBody.classList.replace(Theme.LIGHT, Theme.DARK);
        theme = Theme.DARK;
    }
    else {
        refs.indexBody.classList.replace(Theme.DARK, Theme.LIGHT);
        theme = Theme.LIGHT;
    }

    localStorage.setItem('theme', theme);
}

// Create menu

const menuMarkup = createMenu(menuItems);
refs.menuContainer.insertAdjacentHTML('beforeend', menuMarkup);

function createMenu(cards) {
    return cards.map(cardTemps).join('');
}

