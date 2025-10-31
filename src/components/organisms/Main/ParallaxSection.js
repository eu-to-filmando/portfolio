import { Component } from "../../../core/component.js";
import { Title, Subtitle } from "../../atoms/Title.js";

export class ParallaxSection extends Component {
    constructor() {
        const background = new Component('div', {
            attributes: {
                class: 'parallax-section__background',
                id: 'parallax-bg'
            }
        }, [
            new Component('img', {
                attributes: {
                    src: 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=1920',
                    alt: 'Cinematic background',
                    class: 'img-cover'
                }
            })
        ]);

        const overlay = new Component('div', {
            attributes: {
                class: 'parallax-section__overlay'
            }
        });

        const content = new Component('div', {
            attributes: {
                class: 'parallax-section__content'
            }
        }, [
            new Title('🎥 A arte na vida e a vida na arte.', 'primary'),
            new Subtitle('@eutofilmando')
        ]);

        const scrollButton = new Component('div', {
            attributes: {
                class: 'parallax-section__scroll-btn'
            },
            events: {
                click: () => {
                    document.querySelector('#portfolio')?.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        }, ['↓']);

        super('section', {
            attributes: {
                class: 'parallax-section',
                id: 'home'
            }
        }, [background, overlay, content, scrollButton]);
    }
}