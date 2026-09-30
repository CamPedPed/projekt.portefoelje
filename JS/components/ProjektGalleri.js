import { ProjektKort } from "./ProjektKort.js";

export class ProjektGalleri {
  #projects = [];
  #container;

  constructor(containerId) {
    this.#container = document.getElementById(containerId);
  }

  addProject(project) {
    if (!project.title || !project.url) {
      throw new Error("A project needs a title and URL");
    }

    this.#projects.push(project);
    this.#render();
  }

  showProjectsWithTechnology(technology) {
    const matchingProjects = this.#projects.filter(project =>
      project.technologies.includes(technology)
    );

    this.#render(matchingProjects);
  }

  showAllProjects() {
    this.#render();
  }

  #render(projects = this.#projects) {
    this.#container.innerHTML = projects
      .map(
        project => {
          const kort = new ProjektKort(projects);
          return kort.render();
        }
      )
      .join("");
    }
}