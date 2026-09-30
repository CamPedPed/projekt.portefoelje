export class Footer {
    constructor(h3, links) {
        this.h3 = h3;
        this.links = links;
    }

    render() {
        const footer = document.createElement("footer");

        footer.innerHTML = `
            <h3>${this.h3}</h3>

            <div class="footer-links">
                ${this.links
                    .map(item => `
                        <a href="${item.url}">
                            <i class="${item.icon}"></i>
                            <span>${item.text}</span>
                        </a>
                        `)
                        .join("")}
            </div>
            `;

        return footer;
    }
}