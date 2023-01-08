import Page from "../../core/templates/page";

class Main extends Page {
    static textObject = {
        mainTitle: 'Main',
    };

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(Main.textObject.mainTitle);

        this.container.append(title);

        return this.container;
    }
}

export default Main;