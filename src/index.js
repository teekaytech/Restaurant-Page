import setHeader from './modules/pageHeader';
import CreateElement from './modules/domElements';
import createTabs from './modules/tabs';
import Home from './modules/home';
import Menu from './modules/menu';
import Contact from './modules/concact';
import './assets/styles.scss';

const pageTabs = Array.from(createTabs.tabs);
const parentContainer = document.getElementById('content');
const mainContainer = CreateElement('main', null, 'main');
const home = new Home('home-page', 'Welcome!');
const menu = new Menu('menu-page', 'Our Menu!');
const contact = new Contact('contact-page', 'Contact Us');

const showPage = (page) => {
  mainContainer.innerHTML = '';
  mainContainer.appendChild(page.joinContents());
};

const render = () => {
  parentContainer.appendChild(setHeader.headerContainer);
  parentContainer.appendChild(mainContainer);
  showPage(home);
};

render();

pageTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    switch (tab.dataset.val) {
      case '0':
        showPage(home);
        break;

      case '1':
        showPage(menu);
        break;

      case '2':
        showPage(contact);
        break;

      default:
        mainContainer.innerHTML = null;
        break;
    }
  });
});
