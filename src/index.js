import './styles.css';
import menu from './data/menu.json';
import createMenuMarkup from './templates/menuTemplate.hbs';

const refs = {
    menuList: document.querySelector('.menu'),
    switchInput: document.querySelector('.theme-switch__toggle'),
    body: document.body,
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.body.classList.add(localStorage.getItem('theme') === null ? Theme.LIGHT : localStorage.getItem('theme'))

const markup = menu.map(obj => createMenuMarkup(obj));
refs.menuList.insertAdjacentHTML('beforeend', markup.join(''));

refs.switchInput.checked = localStorage.getItem('theme') === Theme.DARK;

refs.switchInput.addEventListener('click', hendleSwitchTheme);

function toggleTheme(add, rem) {
        refs.body.classList.replace(rem, add);
        localStorage.setItem('theme', add);
}

function hendleSwitchTheme(e) {
    if (e.target.checked) {
        toggleTheme(Theme.DARK, Theme.LIGHT);
        return;
    }
        toggleTheme(Theme.LIGHT, Theme.DARK);
        return;
}
