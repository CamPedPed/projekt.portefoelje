import { Profile } from "./data/profil.js";
import { PortfolioPage } from "./components/PortfolioPage.js";
import { profileData } from "./data/data.js";


const profile = new Profile(
    profileData.name,
    profileData.introduction,
    profileData.img,
    profileData.link,
    profileData.url
);

const portfolio = new PortfolioPage(profile);

portfolio.render();



