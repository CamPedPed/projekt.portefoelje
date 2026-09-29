// Header og footer
class Header {
    constructor(logo, navItems) {
        this.logo = logo;
        this.navItems = navItems;
    }

    render() {
        const header = document.createElement("header");

        header.innerHTML = `
            <a href="index.html">
                <img class="logo" src="${this.logo}" alt="logo">
                </a>
                
                <nav>
                    ${this.navItems
                    .map(item => `
                        <a href="${item.url}">${item.text}</a>
                    `)
                    .join("")}
            </nav>
        `;

        return header;
    }
}

class Footer {
    constructor(text) {
        this.text = text;
    }
    render() {
        const footer = document.createElement("footer");

        footer.textContent = this.text;

        return footer;
    }
}

// Oprettelse af header og footer
const header = new Header("img/logoc.png", [
    { text: "Forside", url: "index.html" },
    { text: "Projekter", url: "projekter.html" },
    { text: "Om mig", url: "om.html" },
]);

const footer = new Footer("Kontakt");

// Indsætning i HTML

document
    .getElementById("site-header")
    .appendChild(header.render());

document
    .getElementById("site-footer")
    .appendChild(footer.render());




class ProjectGallery {
  // Encapsulation: internal data and DOM reference are private
  #projects = [];
  #container;

  constructor(containerId) {
    this.#container = document.getElementById(containerId);
  }

  // Public interface: users of the class only need these methods
  // Hvis der ikke er noget projekt eller url, smider den fejlen som under her
  addProject(project) {
    if (!project.title || !project.url) {
      throw new Error("A project needs a title and URL");
    }

    

    this.#projects.push(project);
    this.#render();
  }

  // Herunder er en metode, der lader os filtrere de forskellige projekter ud fra teknologien. Eksempelvis kan den filtrere ud fra projekter bygget op med scss eller css. Det er altså et generelt filtreringsredskab

  showProjectsWithTechnology(technology) {
    const matchingProjects = this.#projects.filter(project =>
      project.technologies.includes(technology)
    );

    this.#render(matchingProjects);
  }

  showAllProjects() {
    this.#render();
  }

  // Encapsulation: rendering details remain private
  // Den kører listen igennem af projekter. Vil man tilføje noget til projekterne, skal man tilføje dem i denne render.
  #render(projects = this.#projects) {
    this.#container.innerHTML = projects
      .map(
        project => `
          <article class="project-card">
            <h3>${project.title}</h3>
            <img src="${project.image.src}" alt="${project.image.alt}">
            <p>${project.description}</p>
            <a href="${project.url}">Gå til hjemmesiden</a>
          </article>
        `
      )
      .join("");
  }
}

//herunder laves selve galleriet. Det skal tilføjes for hvert nyt projekt, som tilføjes
//id-et står i HTML'en og refereres herunder i parentesen. Skal et nyt element tilføjes, bruges gallery-variablen og kalder på addProject.
const gallery = new ProjectGallery("project-gallery");

// Herunder er strukturen for at tilføje nye projekter
gallery.addProject({
  title: "Garn & Craft",
  image: {
    src: "img/cat-memes.png",
    alt: "Designforslag af hjemmesidens forside til Garn & Craft"
  },
    description: "Garn- og hobbybutikken i Kolding ønskede at få fat i en yngre målgruppe. Samtidig tilbød de et håndarbejdssamarbejde i butikkens lokaler hver 2. torsdag i måneden. Her var oplevelsen dog, at ikke mange tilsluttede sig disse aftener. Dem, der tilsluttede sig det sociale arrangement var den ældre målgruppe. Formålet med opgaven var, at gøre den yngre målgruppe opmærksom på de Garn & Crafts sociale tilbud og opfriske hjemmesiden, så den fremstod mindre rodet og mere farverig til fordel for det yngre segment. Endvidere skulle håndarbejdsdelen fremhæves, da Garn & Craft blev opfattet som en strikkebutik.",
    url: "https://danziiiiim.github.io/",
    technologies: ["HTML", "CSS", "Figma"]
});

gallery.addProject({
  title: "DKE3D / Sassiecat3d",
  image: {
    src: "img/cat-quiz.png",
    alt: "Designforslag af hjemmesidens forside til DKE3D / Sassiecat3d"
  },
    description: "DKE3D / Sassiecat3d kom med en AI-genereret hjemmeside, der afveg fra deres egne værdier, hvor håndværk og kreativiteten var alfa omega for deres virksomhed, som sælger 3D-printede produkter og 3D-filer. De ønskede derfor en let-redigerbar hjemmeside, som var både responsiv, byggede på deres storytelling og samtidig fremhævede færdige produkter i en webshop. Designet skulle tiltale både fantasyentuisiaster og børn/unge med neudiverse udfordringer, hvor fidgets og fantasiuniverset er et åndehul.",
    url: "http://caped.dk/dke3d/",
    technologies: ["Figma", "WordPress"]
});

gallery.addProject({
  title: "Everything about cats",
  image: {
    src: "img/everything-about-cats.png",
    alt: "Everything about cats Website"
  },
    description: "Prototype made in figma",
    url: "/projects/everything-about-cats.png",
    technologies: ["Figma"]
});

// Den hernede går efter data-filter, som vi har stående i HTML. Den kigger på buttons, men henvender sig kun til dem med denne attribut
const filterButtons = document.querySelectorAll("[data-filter]");


// Denne indikerer blot, hvilken der er aktiv, men gør ellers ikke noget
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter;

      if (selectedFilter === "all") {
        gallery.showAllProjects();
      } else {
        gallery.showProjectsWithTechnology(selectedFilter);
      }

      filterButtons.forEach(item => {
        item.classList.toggle("active", item === button);
      });
    });
  });

// koden herunder viser ovenstående på siden

gallery.showAllProjects();