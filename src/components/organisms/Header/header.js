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

        const burgerButton = new Component('button', {
            attributes: {
                class: 'burger-menu',
                'aria-expanded': 'false',
                'aria-controls': 'header-nav'
            }
        }, [
            new Component('span', { attributes: { class: 'burger-line' } }),
            new Component('span', { attributes: { class: 'burger-line' } }),
            new Component('span', { attributes: { class: 'burger-line' } })
        ]);

        nav.props.attributes.id = 'header-nav';
        
        const container = new Component('div', {
            attributes: {
                class: 'header__container'
            }
        }, [logo, nav, burgerButton]);

        super('header', {
            attributes: {
                class: 'header',
                id: 'header'
            }
        }, [container]);
    }

    toggleMenu(event) {
        const headerElement = event.currentTarget.closest('.header');
        const navElement = headerElement.querySelector('.header__nav');
        const buttonElement = event.currentTarget;

        navElement.classList.toggle('is-open');

        const isExpanded = navElement.classList.contains('is-open');
        buttonElement.setAttribute('aria-expanded', isExpanded);
    }

    render() {
        const element = super.render();
        
        const navLinks = element.querySelectorAll('.nav-link');
        const navElement = element.querySelector('.header__nav');
        const buttonElement = element.querySelector('.burger-menu');

        if (buttonElement) {
            buttonElement.addEventListener('click', this.toggleMenu.bind(this));
        }

        if (navLinks.length > 0 && navElement && buttonElement) {
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navElement.classList.remove('is-open');
                    buttonElement.setAttribute('aria-expanded', 'false');
                });
            });
        }

        document.addEventListener('click', (event) => {
            if (navElement.classList.contains('is-open') && 
                !element.contains(event.target)) {
                
                navElement.classList.remove('is-open');
                buttonElement.setAttribute('aria-expanded', 'false');
            }
        });
        
        return element;
    }
}