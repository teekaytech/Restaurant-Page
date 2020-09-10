import setHeader from './modules/pageHeader';

const startPage = () => {
  const parentContainer = document.getElementById('content');
  parentContainer.appendChild(setHeader.headerContainer);
};

startPage();