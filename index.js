const handleFirstTab = (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');

        window.removeEventListener('keydown', handleFirstTab);
        window.addEventListener('mousedown', handleMouseDownOnce);
    }
};

const handleMouseDownOnce = () => {
    document.body.classList.remove('user-is-tabbing');

    window.removeEventListener('mousedown', handleMouseDownOnce);
    window.addEventListener('keydown', handleFirstTab);
};

window.addEventListener('keydown', handleFirstTab);

const backToTopButton = document.querySelector('.back-to-top');
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
    backToTopButton.style.visibility = isBackToTopRendered
        ? 'visible'
        : 'hidden';
    backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
    backToTopButton.style.transform = isBackToTopRendered
        ? 'scale(1)'
        : 'scale(0)';
};

window.addEventListener('scroll', () => {
    if (window.scrollY > 700) {
        isBackToTopRendered = true;
        alterStyles(isBackToTopRendered);
    } else {
        isBackToTopRendered = false;
        alterStyles(isBackToTopRendered);
    }
});

AOS.init({
    duration: 800, // Global animation duration
    easing: 'ease-in-out', // Smooth easing for animations
    once: true, // Animations happen only once when scrolling down
    mirror: false, // Do not animate elements when scrolling back up
});
