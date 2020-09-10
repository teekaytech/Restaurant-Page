import CreateElement from './domElements';
import Page from './pagesTemplate';
import homeIcon from '../assets/images/home.jpg';

class Home extends Page {
  description() {
    this.descContainer = CreateElement('p', null, 'desc', 'desc');
    this.descContainer.innerText = 'Welcome to our world of delectable meals and exotic drinks. We hope to satisfy you with our delicious and affordable meals served under a great ambience.';
    return this.descContainer;
  }

  sampleImage() {
    this.homeImage = CreateElement('img', null, 'home-img', 'home-img');
    this.homeImage.src = homeIcon;
    return this.homeImage;
  }

  joinContents() {
    const superContent = this.prepareContent();
    superContent.appendChild(this.description());
    superContent.appendChild(this.sampleImage());
    superContent.appendChild(this.createFooter());
    return superContent;
  }
}

export default Home;
