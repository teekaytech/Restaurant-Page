import CreateElement from './domElements';
import Page from './pagesTemplate';

class Menu extends Page {
  description() {
    this.descContainer = CreateElement('p', null, 'desc', 'desc');
    this.descContainer.innerText = 'Here is our menu:';
    return this.descContainer;
  }

  // sampleImage(source = 'default.jpg') {
  //   this.homeImage = CreateElement('img', null, 'home-img', 'home-img');
  //   this.homeImage.src = source;
  //   return this.homeImage;
  // }

  joinContents() {
    const superContent = this.prepareContent();
    superContent.appendChild(this.description());
    // superContent.appendChild(this.sampleImage());
    superContent.appendChild(this.createFooter());
    return superContent;
  }
}

export default Menu;
