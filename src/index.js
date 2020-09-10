import setHeader from './modules/pageHeader';
import createTabs from './modules/tabs';

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
