import Create from "./base/elementCreator";

class Input extends Create {
  constructor(id) {
    super("input");
    this.tooltip = null;
    this.id = id;
  }
  createLabelAndInput() {
    const label = new Create("label").addAttributes([`for: ${this.id}`]);
    this.element = new Create("div")
      .addClasses("input__wrapper")
      .addAttributes([`id: ${this.id}`])
      .placeElements([label, this.element]);
    return this;
  }
  createInputWithTooltip(message) {
    this.tooltip = new Create("div")
      .addText(message)
      .addClasses("tooltip hidden");
    const label = new Create("label").addAttributes([`for: ${this.id}`]);
    this.element = new Create("div")
      .addClasses("input__wrapper")
      .addAttributes([`id: ${this.id}`])
      .placeElements([label, this.element, this.tooltip]);
    return this;
  }

  addClasses(classNames) {
    console.log(this.element);
    return this;
  }
}

export default Input;
