import CreateElement from './elements';

class Page {
  constructor(name, title) {
    this.name = name;
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
    this.footer = CreateElement('footer', '(@) Klass Restaurant, 2020', 'footer', 'footer');
    return this.footer;
  }
}

export default Page;
