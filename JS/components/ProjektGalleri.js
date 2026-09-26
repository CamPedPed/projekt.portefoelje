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
            <a href="${project.url}">View project</a>
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
    alt: "Garn & Craft forsidedesign"
  },
  description: "A site filled with cat memes",
  url: "https://danziiiiim.github.io/",
  technologies: ["HTML", "CSS"]
});

gallery.addProject({
  title: "Cat Quiz Site",
  image: {
    src: "img/cat-quiz.png",
    alt: "Cat Quiz Site"
  },
  description: "A responsive cat quiz site",
  url: "/projects/cat-quiz",
  technologies: ["HTML", "SCSS", "JS"]
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