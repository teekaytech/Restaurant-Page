import CreateElement from './domElements';
import Page from './pagesTemplate';
import menu1 from '../assets/images/menu1.png';
import menu2 from '../assets/images/menu2.png';
import menu3 from '../assets/images/menu3.png';
import menu4 from '../assets/images/menu4.png';
import menu5 from '../assets/images/menu5.png';
import menu6 from '../assets/images/menu6.png';


class Menu extends Page {
  description() {
    this.descContainer = CreateElement('p', null, 'desc', 'desc');
    this.descContainer.innerText = 'Here is our menu:';
    return this.descContainer;
  }

  allMenuImg() {
    this.menus = [menu1, menu2, menu3, menu4, menu5, menu6];
    return this.menus;
  }

  titles() {
    this.all = [
      'Real Amala + Gbegiri and Ewedu',
      'Beans with beef and egg',
      'Fried Rice + Jollof Rice + Egg + Spaghetti',
      'Egusi soup + Beef + confirm ponmo',
      'Jollof Rice + Chicken + Plantain + Spaghetti',
      'Assorted Beef',
    ];
    return this.all;
  }

  makeMenu(title, img, i) {
    const menuPark = CreateElement('div', '', 'menu', 'menu');
    menuPark.appendChild(CreateElement('p', title, 'title', `title title-${i}`));
    this.menuImg = CreateElement('img', null, 'home-img', 'home-img');
    this.menuImg.src = img;
    menuPark.appendChild(this.menuImg);
    return menuPark;
  }

  prepareMenu() {
    const allMenu = CreateElement('div', '', 'all-menu', 'all-menu');
    for (let i = 0; i < this.allMenuImg().length; i += 1) {
      const currentMenu = this.makeMenu(this.titles()[i], this.allMenuImg()[i], i);
      allMenu.appendChild(currentMenu);
    }
    return allMenu;
  }


  joinContents() {
    const superContent = this.prepareContent();
    superContent.appendChild(this.description());
    superContent.appendChild(this.prepareMenu());
    superContent.appendChild(this.createFooter());
    return superContent;
  }
}

export default Menu;
