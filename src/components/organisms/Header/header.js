import { Component } from '../../../core/component.js'

export class Header extends Component {
    constructor() {
        const logo = new Component('a', {
            attributes: {
                href: '#',
                class: 'header__logo'
            }
        }, [
            'Eu to',
            new Component('span', {}, ['Filmando'])
        ]);

        const navLinks = [
            { text: 'Home', href: '#home' },
            { text: 'Portfolio', href: '#portfolio' },
            { text: 'Contact', href: '#contact' }
        ];

        const nav = new Component('nav', {
            attributes: {
                class: 'header__nav'
            }
        }, navLinks.map(link =>
            new Component('a', {
                attributes: {
                    href: link.href,
                    class: 'nav-link'
                }
            }, [link.text])
        ));

        const container = new Component('div', {
            attributes: {
                class: 'header__container'
            }
        }, [logo, nav]);

        super('header', {
            attributes: {
                class: 'header',
                id: 'header'
            }
        }, [container]);
    }
}