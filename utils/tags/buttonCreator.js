import Create from "./base/elementCreator";

class Button extends Create {
  constructor() {
    super("button");
  }
  setButtonType(type) {
    this.addAttributes(`type: ${type}`);
    return this;
  }
}

export default Button;
