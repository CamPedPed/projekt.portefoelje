export class ProjektKort {
    constructor(project) {
        this.project = project;
    }

    render() {
        return `
            <article class "project-card">
                <h3>${this.project.title}</h3>

                

                <p>${this.project.description}</p>

                <img
                    src="${this.project.image.src}"
                    alt="${this.project.image.alt}"
                >
                <img
                    src="${this.project.image.src}"
                    alt="${this.project.image.alt}"
                >
                <img
                    src="${this.project.image.src}"
                    alt="${this.project.image.alt}"
                >
                <img
                    src="${this.project.image.src}"
                    alt="${this.project.image.alt}"
                >
                <a href="${this.project.url}">
                    Gå til hjemmesiden
                </a>
            </article>
        `;
    }
}