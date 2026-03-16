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
    if (window.scrollY > 200) {
        header.classList.add('fixed')
    } else {
        header.classList.remove('fixed');
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
    threshold: 0.5
});


elements.forEach(el => observer.observe(el));




const forms = document.querySelectorAll('.contact-form');

forms.forEach(form => {

const countrySelect = form.querySelector('.country-select');
const countryList = form.querySelector('.country-list');

const code = form.querySelector('.code');
const flag = form.querySelector('.flag');

const phoneInput = form.querySelector('.phone');
const nameInput = form.querySelector('.name');

const submitBtn = form.querySelector('.submit-btn');

let currentMask = "(99) 999-99-99";


countrySelect.addEventListener('click', () => {

countryList.style.display =
countryList.style.display === "block"
? "none"
: "block";

});


countryList.addEventListener('click', (e) => {

if (e.target.tagName !== "LI") return;

const mask = e.target.dataset.mask;
const countryCode = e.target.dataset.code;
const countryFlag = e.target.textContent.split(" ")[0];

currentMask = mask;

code.textContent = countryCode;
flag.textContent = countryFlag;

phoneInput.placeholder = mask;

phoneInput.value = "";

validate();

});


phoneInput.addEventListener("input", () => {

let numbers = phoneInput.value.replace(/\D/g, "");

let result = "";
let index = 0;

for (let char of currentMask) {

if (char === "9") {

if (numbers[index]) {
result += numbers[index];
index++;
}

} else {

result += char;

}

}

phoneInput.value = result;

validate();

});


nameInput.addEventListener("input", validate);


function validate() {

const nameValid = nameInput.value.trim().length > 2;

const digits = phoneInput.value.replace(/\D/g, "");
const maskDigits = (currentMask.match(/9/g) || []).length;

const phoneValid = digits.length === maskDigits;

submitBtn.disabled = !(nameValid && phoneValid);

}

});




// const countrySelect = document.getElementById("countrySelect")
// const countryList = document.getElementById("countryList")

// const code = document.getElementById("code")
// const flag = document.getElementById("flag")

// const phoneInput = document.getElementById("phone")
// const nameInput = document.getElementById("name")

// const submitBtn = document.getElementById("submitBtn")

// const modal = document.getElementById("modal")
// const closeModal = document.getElementById("closeModal")

// let currentMask = "(99) 999-99-99"

// countrySelect.onclick = () => {
//     countryList.style.display =
//         countryList.style.display === "block" ?
//         "none" :
//         "block"
// }

// countryList.onclick = (e) => {

//     if (e.target.tagName !== "LI") return

//     const mask = e.target.dataset.mask
//     const countryCode = e.target.dataset.code
//     const countryFlag = e.target.textContent.split(" ")[0]

//     currentMask = mask

//     code.textContent = countryCode
//     flag.textContent = countryFlag

//     phoneInput.placeholder = mask

//     countryList.style.display = "none"

//     phoneInput.value = ""

//     validate()
// }

// phoneInput.addEventListener("input", () => {

//     let numbers = phoneInput.value.replace(/\D/g, "")

//     let result = ""
//     let index = 0

//     for (let char of currentMask) {

//         if (char === "9") {
//             if (numbers[index]) {
//                 result += numbers[index]
//                 index++
//             }
//         } else {
//             result += char
//         }

//     }

//     phoneInput.value = result

//     validate()
// })

// nameInput.addEventListener("input", validate)

// function validate() {

//     const nameValid = nameInput.value.trim().length > 2

//     const digits = phoneInput.value.replace(/\D/g, "")

//     const maskDigits = (currentMask.match(/9/g) || []).length

//     const phoneValid = digits.length === maskDigits

//     submitBtn.disabled = !(nameValid && phoneValid)
// }

// document
//     .getElementById("contactForm")
//     .addEventListener("submit", (e) => {

//         e.preventDefault()

//         modal.style.display = "flex"

//     })

// closeModal.onclick = () => {
//     modal.style.display = "none"
// }







