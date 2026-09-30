export class Profile {
    constructor(name, title, introduction) {
        this.name = name;
        this.title = title;
        this. introduction = introduction;
    }

    render() {
        return `
            <section class="intro">
                <h2>Om mig</h2>
                <p>${this.introduction}</p>
                </section>
        `;
    }
}