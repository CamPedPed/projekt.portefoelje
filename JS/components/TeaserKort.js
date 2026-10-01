export class TeaserKort {
    constructor(data) {
        this.data = data;
    }

    render() {
        const article = document.createElement("article");

        article.classList.add("teaser-kort");

        article.innerHTML = `
            <h2>
            ${this.data.title}
            </h2>

            <p>
            ${this.data.text}
            </p>

            <a href="${this.data.link}">
                ${this.data.buttonText}
            </a>

        `;

        return article;
    }
}

// Bruges til begge bokse på forsiden