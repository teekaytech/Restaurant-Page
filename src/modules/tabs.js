import CreateElement from './elements';

const createTabs = (() => {
  const nav = CreateElement('nav', null, 'navbar', 'navbar');
  const tabList = CreateElement('ul', null, 'tabs', 'tabs');
  const navItems = ['Home', 'Our Menu', 'Get in touch'];

  const doTabs = (items, list) => {
    for (let i = 0; i < items.length; i += 1) {
      const li = CreateElement('li', items[i], 'list', `list list${i + 1}`);
      li.setAttribute('data-val', i);
      list.appendChild(li);
    }
    return list;
  };

  const clearTabStyle = (tabs) => {
    tabs.forEach((tab) => {
      tab.classList.remove('current-page');
    });
  };

  const styleCurrentTab = (tab) => {
    if (tab) {
      tab.classList.add('current-page');
    }
  };


  nav.appendChild(doTabs(navItems, tabList));
  const tabs = tabList.children;

  return {
    nav, tabs, clearTabStyle, styleCurrentTab,
  };
})();

export default createTabs;
