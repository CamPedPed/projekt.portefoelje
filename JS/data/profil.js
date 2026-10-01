export class Profile {
    constructor(name, title, introduction, img) {
        this.name = name;
        this.title = title;
        this.introduction = introduction;
        this.img = img;
    }

    render() {
        return `
            <section class="intro">
                <h2>Om mig</h2>
                <p>${this.introduction}</p>
                <img src="${this.img}" alt="Familiebillede skabt ved hjælp af LEGO ${this.name}">
            </section>
        `;
    }
}