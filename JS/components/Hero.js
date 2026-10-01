export class Hero {
    constructor(data) {
        this.data = data;
    }

    render() {
        const section = document.createElement("section");

        section.classList.add("hero");

        section.innerHTML = `
            <h1>${this.data.title}</h1>

                <div class="hero-content">

                    <div class="hero-text">
                        ${this.data.paragraphs.map(paragraph => `
                                <p>${paragraph}</p>
                            `).join("")}
                    </div>

                    <div class="hero-image">
                        <img
                            src="${this.data.image}"
                            alt="Camilla bygger med LEGO-klodser"
                        >
                    </div>
                </div>
        `;
        return section;
    }
}