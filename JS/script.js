// Header og footer
import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";

// HEADER
const header = new Header("img/logobw.png", [
  {
    text: "Forside",
    url: "index.html"
  },

  {
    text: "Projekter",
    url: "projekter.html"
  },

  {
    text: "Om",
    url: "om.html"
  }

]);

// FOOTER

const footer = new Footer("Skab forbindelse", [
  {
    text: "E-mail",
    url: "mailto:chpedersen25@gmail.com",
    icon: "fa-solid fa-envelope"
  },

  {
    text: "Tlf.",
    url: "tel:+4524976720",
    icon: "fa-solid fa-phone"
  },

  {
    text: "LinkedIn",
    url: "https://dk.linkedin.com/in/camilla-h%C3%B8hrmann-pedersen-758b7320a",
    icon: "fa-brands fa-linkedin-in"
  }
]);

// MODULES

document
  .getElementById("site-header")
  .appendChild(header.render());



document
  .getElementById("site-footer")
  .appendChild(footer.render());