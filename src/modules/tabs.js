import CreateElement from './domElements';

const createTabs = (() => {
  const nav = CreateElement('nav', '', 'navbar', 'navbar');
  const tabList = CreateElement('ul', '', 'tabs');
  const navItems = ['Home', 'Our Menu', 'Get in touch'];

  const doTabs = (items, list) => {
    for (let i = 0; i < items.length; i += 1) {
      const li = CreateElement('li', items[i], 'list', `list${i + 1}`);
      li.setAttribute('data-val', i);
      list.appendChild(li);
    }
    return list;
  };


  nav.appendChild(doTabs(navItems, tabList));
  const tabs = tabList.children;

  return { nav, tabs };
})();

export default createTabs;
