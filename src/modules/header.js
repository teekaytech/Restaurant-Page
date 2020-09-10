import CreateElement from './elements';
import createTabs from './tabs';

const setHeader = (() => {
  const headerContainer = CreateElement('header', null);
  const header = CreateElement('h1', 'Klass Restaurant', 'h-text', 'h-text');

  headerContainer.appendChild(header);
  headerContainer.appendChild(createTabs.nav);

  return { headerContainer };
})();

export default setHeader;