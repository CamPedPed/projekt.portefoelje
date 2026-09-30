export class Header {
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