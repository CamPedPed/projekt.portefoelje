export class ProjektKort {
    constructor(project) {
        this.project = project;
    }

    render() {
        return `
            <article class="project-card">
                <h2>${this.project.title}</h2>

                <p>${this.project.description}</p>

                <img
                    src="${this.project.image.src}"
                    alt="${this.project.image.alt}"
                >

                ${(this.project.additionalImages || [])
                    .map(image => `
                        <img
                            src="${image.src}"
                            alt="${image.alt}"
                        >
                    `)
                    .join("")}

                <p> ${this.project.text}</p>
                <a href="${this.project.url}">
                    Gå til hjemmesiden
                </a>
            </article>
        `;
    }
}