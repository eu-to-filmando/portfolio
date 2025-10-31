import { Component } from "../../core/component.js";

export class Title extends Component {
    constructor(text, level = 'primary') {
        const levelMap = {
            primary: { tag: 'h1', class: 'title-primary' },
            secondary: { tag: 'h2', class: 'title-secondary' },
            tertiary: { tag: 'h3', class: 'title-tertiary' }
        };

        const config = levelMap[level] || levelMap.primary;

        super(config.tag, {
            attributes: {
                class: config.class
            }
        }, [text]);
    }
}

export class Subtitle extends Component {
    constructor(text) {
        super('p', {
            attributes: {
                class: 'subtitle'
            }
        }, [text]);
    }
}