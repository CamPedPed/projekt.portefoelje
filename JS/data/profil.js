export class Profile {
    constructor(name, introduction, img, link, url) {
        this.name = name;
        this.introduction = introduction;
        this.img = img;
        this.link = link;
        this.url = url;
    }

    render() {
        return `
            <section class="intro">
                <h2>En god forbindelse</h2>

                <p>${this.introduction}</p>
        
                <img 
                    src="${this.img}" 
                    alt="Familiebillede skabt ved hjælp af LEGO ${this.name}">

                <a href="${this.link}" target="https://www.16personalities.com/da/infp-personlighed">MÆGLEREN fra personlighedstesten</a>    

                <a href="${this.url}" target="https://www.image2url.com/r2/default/documents/1790920885490-003b5857-1355-4716-9472-0393c84d87a1.pdf"> CV og kompetencer</a>

            </section>
        `;
    }
}