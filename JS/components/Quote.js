export class Quote {
    constructor(data) {
        this.data = data;
    }

    render() {
        const section = document.createElement("section");

        section.classList.add("quote");

        section.innerHTML = `
            <blockquote>
                "${this.data.text}"
            </blockquote>
        `;
        return section;
    }
}

//HUSK - Kan genbruges til citater på andre sider