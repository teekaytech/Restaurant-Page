import setHeader from './modules/pageHeader';
import createTabs from './modules/tabs';
import HomePage from './modules/homePage';

const pageTabs = Array.from(createTabs.tabs);

const render = () => {
  const parentContainer = document.getElementById('content');

  parentContainer.appendChild(setHeader.headerContainer);
};

render();

pageTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    alert(tab.innerText);
  });
});

const home = new HomePage('home-page');
console.log(home);
