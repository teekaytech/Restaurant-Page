import CreateElement from './elements';
import Page from './template';

class Contact extends Page {
  description() {
    this.descContainer = CreateElement('p', '', 'desc', 'desc');
    this.descContainer.innerText = 'We would love to hear from you! Our goal is to satisfy your culinary needs and desires to the best of or ability';
    return this.descContainer;
  }

  data() {
    this.details = [
      'Palms Mall, opposite High Court, Ring Road, Ibadan, Oyo State',
      '08034227575, 08027637814',
      'info@klazz.com',
    ];
    return this.details;
  }

  branch() {
    this.bContainer = CreateElement('div', '', 'office', 'office');
    this.bContainer.appendChild(CreateElement('p', this.data()[0], 'address', 'address'));
    this.bContainer.appendChild(CreateElement('p', this.data()[1], 'phone', 'phone'));
    this.bContainer.appendChild(CreateElement('p', this.data()[2], 'email', 'email'));
    return this.bContainer;
  }

  joinContents() {
    const superContent = this.prepareContent();
    superContent.appendChild(this.description());
    superContent.appendChild(this.branch());
    superContent.appendChild(this.createFooter());
    return superContent;
  }
}

export default Contact;
