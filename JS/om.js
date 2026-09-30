import { Header } from "./header.js";
import { Footer } from "./footer.js";


import { Profile } from "./data/profil.js";
import { PortfolioPage } from "./components/PortfolioPage.js";
import { profileData, } from "./data/data.js";

const header = new Header();
const footer = new Footer():

document.querySelector("#header").innerHTML = header.render();
document.querySelector("#footer").innerHTML = footer.render();

const profile = new Profile(
    profileData.name,
    profileData.title,
    profileData.introduction
);

const portfolio = new PortfolioPage(profile);

portfolio.render();