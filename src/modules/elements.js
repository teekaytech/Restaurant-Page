const CreateElement = (name, text, id = null, classname = null) => {
  const element = document.createElement(name);

  element.innerText = text;
  element.className += classname;
  element.setAttribute('id', id);

  return element;
};

module.exports = CreateElement;