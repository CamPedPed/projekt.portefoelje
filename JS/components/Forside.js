import { Hero } from "./Hero.js";
import { TeaserKort } from "./TeaserKort.js";

export class Forside {
    constructor(data) {
        this.data = data;
    }

    render() {
        const main = document.createElement("div");

        main.classList.add("forside");

        // HERO
        const hero = new Hero(this.data.hero);
        main.appendChild(
            hero.render()
        );

        // CITAT
        const quote = document.createElement("section");

        quote.classList.add("quote");
        quote.innerHTML = `
        <blockquote>
            "${this.data.quote.text}"
        </blockquote>
        `;

        main.appendChild(quote);

        // TEASER KORT
        const teaserContainer = document.createElement("section");
        
        teaserContainer.classList.add("teaser-container");

        this.data.teasers.forEach(teaserData => {
            const teaser = new TeaserKort(teaserData);
            teaserContainer.appendChild(
                teaser.render()
            );
        });

        main.appendChild(teaserContainer);

        return main;
    }
}