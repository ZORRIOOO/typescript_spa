import Components from "../../templates/components";
import {pages} from "../../../enums";

class Header extends Components {
    static buttons = [
        {
            id: pages.MAIN_PAGE,
            title: 'Main'
        },
        {
            id: pages.SETTINGS_PAGE,
            title: 'Settings'
        },
        {
            id: pages.STATISTICS_PAGE,
            title: 'Statistics'
        }
    ]

    constructor(tagName: string, className: string) {
        super(tagName, className);
    }

    renderButtons() {
        const buttonsContainer = document.createElement('div');

        Header.buttons.forEach(({id, title}) => {
            const buttonHTML = document.createElement('a');

            buttonHTML.href = `#${id}`;
            buttonHTML.innerText = title;

            buttonsContainer.append(buttonHTML);
        });

        this.container.append(buttonsContainer);
    }

    render() {
        this.renderButtons();

        return this.container;
    }
}

export default Header;