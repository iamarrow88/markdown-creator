class App {
  constructor(root, viewManager, loginPage, startPage, gamePage) {
    this.root = root;
    this.viewManager = viewManager;
    this.loginPage = loginPage;
    this.startPage = startPage;
    this.gamePage = gamePage;
  }

  startApp() {
    this.loginPage.createTemplate();
    console.log(this.loginPage.template);
    this.root.addEventListener("click", (event) => {
      if (event.target.dataset.action === "login") {
        console.log(event.target);
      }
    });
  }
}

export default App;
