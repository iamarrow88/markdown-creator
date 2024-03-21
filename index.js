import LoginPage from "./components/pages/login-page";
import App from "./components/app";
import Viewer from './components/view/viewer';
import StartPage from "./components/pages/start-page";
import GamePage from "./components/pages/game-page";

const root = document.querySelector("body");
const viewManager = new Viewer(root);
const loginPage = new LoginPage();
const startPage = new StartPage("nameName", "surnameSurname");
const gamePage = new GamePage();

const app = new App(root, viewManager, loginPage, startPage, gamePage);

app.startApp();
