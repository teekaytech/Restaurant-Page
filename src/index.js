import setHeader from './modules/header';
import CreateElement from './modules/elements';
import createTabs from './modules/tabs';
import Home from './modules/home';
import Menu from './modules/menu';
import Contact from './modules/contact';
import './assets/styles.scss';

const pageTabs = Array.from(createTabs.tabs);
const parentContainer = document.getElementById('content');
const mainContainer = CreateElement('main', null, 'main');
const home = new Home('home-page', 'Welcome!');
const menu = new Menu('menu-page', 'Our Menu!');
const contact = new Contact('contact-page', 'Contact Us');

const showPage = (page, tab = false) => {
  createTabs.clearTabStyle(pageTabs);
  createTabs.styleCurrentTab(tab);
  mainContainer.innerHTML = '';
  mainContainer.appendChild(page.joinContents());
};

const render = () => {
  parentContainer.appendChild(setHeader.headerContainer);
  parentContainer.appendChild(mainContainer);
  showPage(home);
};

pageTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    switch (tab.dataset.val) {
      case '0':
        showPage(home, tab);
        break;

      case '1':
        showPage(menu, tab);
        break;

      case '2':
        showPage(contact, tab);
        break;

      default:
        mainContainer.innerHTML = '';
        break;
    }
  });
});

render();