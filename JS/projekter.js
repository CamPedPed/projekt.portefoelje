import { ProjektGalleri } from "./components/ProjektGalleri.js";
import { projects } from "./data/projects.js";

const gallery = new ProjektGalleri("project-gallery");

projects.forEach(project => {
    gallery.addProject(project);
});

const filterButtons = document.querySelectorAll("[data-filter]");

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

gallery.showAllProjects();