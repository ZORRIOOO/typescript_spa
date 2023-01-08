import Page from "../../core/templates/page";

class Settings extends Page {
    static textObject = {
        mainTitle: 'Settings',
    };

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(Settings.textObject.mainTitle);

        this.container.append(title);

        return this.container;
    }
}

export default Settings;