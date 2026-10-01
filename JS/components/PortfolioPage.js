export class PortfolioPage {
    constructor(profile, title) {
        this.profile = profile;
        this.title = title;
    }

    render() {

        document.querySelector("#name").textContent =
         this.profile.name;
         
    
        document.querySelector("#title").textContent =
        this.profile.title;

        document.querySelector("#content").innerHTML =
        this.profile.render();

    }
}