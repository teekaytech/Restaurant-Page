import CreateElement from './domElements';

class Page {
  constructor(name) {
    this.name = name;
  }

  createContainer() {
    const container = CreateElement('div', '', this.name, this.name);
    return container;
  }
}

export default Page;
