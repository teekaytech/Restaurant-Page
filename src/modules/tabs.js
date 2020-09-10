import CreateElement from './domElements';

const createTabs = (() => {
  const nav = CreateElement('nav', '', 'navbar', 'navbar');
  const tabList = CreateElement('ul', '', 'tabs');
  const navItems = ['Home', 'Our Menu', 'Get in touch'];

  navItems.forEach((tab) => {
    const list = CreateElement('li', tab, 'list', 'list');
    tabList.appendChild(list);
  });


  nav.appendChild(tabList);
  const tabs = tabList.children;

  return { nav, tabs };
})();

export default createTabs;
