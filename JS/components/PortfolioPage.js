export class PortfolioPage {
    constructor(profile) {
        this.profile = profile;
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