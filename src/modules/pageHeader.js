import CreateElement from './domElements';

const setHeader = (() => {
  const headerContainer = CreateElement('div', '');
  const header = CreateElement('h1', 'Klass Restaurant', 'h-text', 'h-text');

  headerContainer.appendChild(header);

  return { headerContainer };
})();

export default setHeader;