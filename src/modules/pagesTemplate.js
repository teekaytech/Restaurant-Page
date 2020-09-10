import CreateElement from './domElements';

class Page {
  constructor(name, title, footer) {
    this.name = name;
    this.footer = footer;
    this.title = title;
  }

  createContainer() {
    return CreateElement('section', null, this.name, this.name);
  }

  createTitle() {
    return CreateElement('h3', this.title, 'title', 'title');
  }

  prepareContent() {
    const container = this.createContainer();
    container.appendChild(this.createTitle());
    return container;
  }

  createFooter() {
    return CreateElement('footer', this.footer, 'footer', 'footer');
  }
}

export default Page;
