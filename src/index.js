import setHeader from './modules/pageHeader';

const render = () => {
  const parentContainer = document.getElementById('content');

  parentContainer.appendChild(setHeader.headerContainer);
};

render();