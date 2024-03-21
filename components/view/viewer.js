class Viewer {
  constructor(root) {
    this.root = root;
    this.component = null;
  }

  set setComponent(newComponent) {
    if (newComponent instanceof HTMLElement) {
      this.component = newComponent;
    }
  }

  get showComponent() {
    console.log(this.component);
  }
  renderComponent() {
    this.root.append(this.component);
  }

  removeComponents() {
    this.root.childNodes.forEach((node) => node.remove());
  }
}

export default Viewer;
