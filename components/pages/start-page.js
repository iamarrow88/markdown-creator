class StartPage {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  showData() {
    console.log(this.name, this.surname);
  }
}

export default StartPage;