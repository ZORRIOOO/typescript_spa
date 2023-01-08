import Page from "../../core/templates/page";
import Main from "../main";
import Settings from "../settings";
import Statistics from "../statistics";
import {errors, pages} from "../../enums";
import Header from "../../core/components/header";
import Error from "../error";

class App {
    private static container: HTMLElement = document.body;

    private static defaultId: string = 'default';

    private initialPage: Main;

    private header: Header;

    static renderNewPage(id: string) {
        const currentPage = document.querySelector(`#${App.defaultId}`);

        if (currentPage) {
            currentPage.remove();
        }

        const page: Page | null = this.getPage(id);

        if (page) {
            const pageHTML = page.render();

            pageHTML.id = App.defaultId;
            App.container.append(pageHTML);
        }
    };

    static getPage(id: string) {
        switch (id) {
            case pages.MAIN_PAGE:
                return new Main(id);
            case pages.SETTINGS_PAGE:
                return new Settings(id);
            case pages.STATISTICS_PAGE:
                return new Statistics(id);
            default:
                return new Error(id, errors.PAGE_NOT_FOUND);
        }
    }

    private enableRouteChange() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.replace('#','');

            App.renderNewPage(hash);
        });
    }

    constructor() {
        this.initialPage = new Main('main');
        this.header = new Header('p', 'header')
    }

    run() {
        App.container.append(this.header.render())
        App.renderNewPage('main');
        this.enableRouteChange();
    }
}

export default App;