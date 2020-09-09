import DomElement from './domElements';

const Header = (() => {
  const headerContainer = DomElement('div');
  const header = DomElement('h1', 'h-text', '-text', 'Klass Restaurant');

  headerContainer.appendChild(header);

  return { headerContainer };
})();

export default Header;