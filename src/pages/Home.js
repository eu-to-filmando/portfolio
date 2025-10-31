import { Component } from "../core/component.js";
import { MainLayout } from "../components/templates/MainLayout.js";
import { ParallaxSection } from "../components/organisms/Main/ParallaxSection.js";

export class Home extends Component {
    constructor() {
        super('div', {
            attributes: {
                class: 'home-page'
            },
        });
    }

    async loadContent() {
        try {
            const layout = new MainLayout([
                new ParallaxSection(),
            ]);

            this.children = [layout]; 

        } catch (error) {
            console.error('Error loading videos: ', error);
        }
    }

    render() {
        const container = document.createElement('div');
        container.className = 'home-page';

        this.children.forEach(child => {
            if (child instanceof Component) {
                container.appendChild(child.render());
            }
        });

        return container;
    }
}