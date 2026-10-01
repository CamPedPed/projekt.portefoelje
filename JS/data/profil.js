export class Profile {
    constructor(name, introduction, link, img) {
        this.name = name;
        this.introduction = introduction;
        this.link = link;
        this.img = img;
    }

    render() {
        return `
            <section class="intro">
                <h2>En god forbindelse</h2>

                <p>${this.introduction}</p>

                <a href="${this.link}" target="https://www.16personalities.com/da/infp-personlighed">MÆGLEREN fra personlighedstesten</a>
        
                <img 
                    src="${this.img}" 
                    alt="Familiebillede skabt ved hjælp af LEGO ${this.name}">
            </section>
        `;
    }
}