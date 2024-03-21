import Create from "../../utils/tags/base/elementCreator";
import Input from "../../utils/tags/inputCreator";
import Button from "../../utils/tags/buttonCreator";

class LoginPage {
  constructor() {
    this.template = null;
  }

  createTemplate() {
    this.template = new Create("section").addClasses("login");

    const nameInput = new Input("name")
      .createLabelAndInput()
        .element.addClasses("name-input")
      .addAttributes(["placeholder: Enter your name"]);

    const surnameInput = new Input("surname")
      .createLabelAndInput()
      .addClasses("surname-input")
      .addAttributes(["placeholder: Enter your surname", "data-action: login"]);

    const button = new Button();

    this.template.placeElements([nameInput.element, surnameInput.element, button.element]);

    return this;
  }
}

export default LoginPage;
