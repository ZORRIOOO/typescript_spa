import Page from "../../core/templates/page";

class Error extends Page {
    private type: number;

    static textObject: {[prop: number]: string} = {
        404: 'Error!',
    };

    constructor(id: string, type: number) {
        super(id);

        this.type = type;
    }

    render() {
        const title = this.createHeaderTitle(Error.textObject[404]);

        this.container.append(title);

        return this.container;
    }
}

export default Error;