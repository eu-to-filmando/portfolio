import { Home } from "./pages/Home.js";

function initScrollEffects() {
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled')
        }
    });
}

function initParallaxEffect() {
    const parallaxBg = document.getElementById('parallax-bg');

    window.addEventListener('scroll', () => {
        if (parallaxBg) {
            const scrolled = window.scrollY;
            const parallaxSpeed = 0.5;
            parallaxBg.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const targetId = href.substring(1);
            const target = document.getElementById(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

async function bootstrap() {
    const app = document.getElementById('app');

    if (app) {
        const homePage = new Home();

        await homePage.loadContent(); 
        
        app.innerHTML = '';
        
        homePage.renderInto(app);

        initScrollEffects();
        initParallaxEffect();
        initSmoothScroll();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
} else {
    bootstrap();
}