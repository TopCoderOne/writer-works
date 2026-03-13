// Мобильное меню
const mobileMenu = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const burger = document.querySelector('.menu-toggle');

const openMenu = () => {
    document.body.style.overflow = 'hidden';
    burger.classList.remove('reverse');
    burger.classList.add('active');
    overlay.classList.add('active');
    mobileMenu.classList.add('active');
}

const closeMenu = () => {
    burger.classList.remove('active');
    burger.classList.add('reverse');
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

burger.addEventListener('click', () =>
    !burger.classList.contains('active') ? openMenu() : closeMenu()
);

// Функция для проверки ширины окна
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        closeMenu();
        setTimeout(() => {
            burger.classList.remove('reverse');
        }, 100);
    }
});

const navLinks = document.querySelectorAll('.nav__item>a');

navLinks.forEach(navLink => {
    navLink.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            closeMenu();
        }
    });
});

const header = document.querySelector('.header');

window.addEventListener('scroll', (e) => {
    if (window.scrollY > 100) {
        header.classList.add('active')
    } else {
        header.classList.remove('active');
    }
})


const elements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;

        setTimeout(() => {
            entry.target.classList.add('show');
        }, delay);

        observer.unobserve(entry.target);
    }
  });
}, {
    threshold: 0.3
});


elements.forEach(el => observer.observe(el));