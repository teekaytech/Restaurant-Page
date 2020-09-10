import setHeader from './modules/pageHeader';
import CreateElement from './modules/domElements';
import createTabs from './modules/tabs';
import HomePage from './modules/homePage';


const pageTabs = Array.from(createTabs.tabs);
const parentContainer = document.getElementById('content');
const mainContainer = CreateElement('main', '', 'main');
const home = new HomePage(
  'home-page',
  'Welcome!',
  '(@) Klass Restaurant, 2020',
  '',
);

const render = () => {
  parentContainer.appendChild(setHeader.headerContainer);
  parentContainer.appendChild(mainContainer);
};

render();

pageTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    switch (tab.dataset.val) {
      case '0':
        mainContainer.innerHTML = '';
        mainContainer.appendChild(home.joinContents());
        break;

      case '1':
        mainContainer.innerHTML = '';
        mainContainer.innerText = tab.innerText;
        break;

      case '2':
        mainContainer.innerHTML = '';
        mainContainer.innerText = tab.innerText;
        break;

      default:
        mainContainer.innerHTML = '';
        break;
    }
  });
});
