import { Component } from "../../core/component.js";
import { Header } from "../organisms/Header/header.js";

export class MainLayout extends Component {
    constructor(children = []) {
        const header = new Header();

        const main = new Component('main', {
            attributes: {
                class: 'main-layout__main'
            }
        }, children);

        const footer = new Component('footer', {
            attributes: {
                class: 'main-layout__footer'
            }
        }, [
            new Component('p', {
                attributes: {
                    class: 'main-layout__footer-text'
                }
            }, ['© 2025 @eutofilmando Portfolio. By Enock.'])
        ]);

        super('div', {
            attributes: {
                class: 'main-layout'
            }
        }, [header, main, footer]);
    }
}