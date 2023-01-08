import Page from "../../core/templates/page";

class Statistics extends Page {
    static textObject = {
        mainTitle: 'Statistics',
    };

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(Statistics.textObject.mainTitle);

        this.container.append(title);

        return this.container;
    }
}

export default Statistics;