import { Forside } from "./components/Forside.js";
import { homeData } from "./data/homeData.js";

const forside = new Forside(homeData);

const siteMain = document.getElementById("site-main");

if (siteMain) {
    siteMain.appendChild(forside.render());
}