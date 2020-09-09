const DomElement = (name, id = '', classname = '', text = '') => {
  const element = document.createElement(name);

  element.className += classname;
  element.setAttribute('id', id);
  element.innerText = text;

  return element;
};

module.exports = DomElement;