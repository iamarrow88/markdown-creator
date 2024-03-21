import StringTransformer from "../../string-tranformer";

class Create {
  constructor(tagName) {
    this.element = document.createElement(tagName);
  }

  addClasses(classNames) {
    if (!this.element.classList) {
      this.element.element.classList.add(...classNames.split(' '));
    } else {
      this.element.classList.add(...classNames.split(" "));
    }
    return this;
  }

  removeClasses(classNames) {
    this.element.classList.remove(...classNames.split(" "));
    return this;
  }

  addText(text) {
    this.element.textContent = text;
    return this;
  }

  removeText() {
    this.element.textContent = "";
    return this;
  }

  addAttributes(attributes) {
    attributes.forEach((pair) => {
      const attrs = pair.split(": ");
      const [key, value] = attrs.length > 1 ? attrs : pair.split(":");
      if (key.includes("data")) {
        const template = key.slice(5).split("-");
        let datasetName = template[0];
        if (template.length > 1) {
          datasetName = StringTransformer.dataAttributeToCamelCase(template);
        }
        this.element.dataset[datasetName] = value;
      } else {
        const resultValue = value || "";
        this.element.setAttribute(key, resultValue);
      }
    });
    return this;
  }

  removeAttributes(attrNames) {
    attrNames.forEach((attr) => this.element.removeAttribute(attr));
    return this;
  }

  placeElements(elementsArray) {
    elementsArray.forEach((element) => {
      if (element) this.element.append(element);
    });
    return this;
  }
}

export default Create;
