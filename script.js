const navFeatures = document.querySelector('.nav-link-3');
const navUseCases = document.querySelector('.nav-link-4');
const firstMenuList = document.querySelector('.menulist-1');
const secondMenuList = document.querySelector('.menulist-2');

navFeatures.addEventListener('click', (event) => {
    event.preventDefault();
    firstMenuList.classList.toggle('active');
    secondMenuList.classList.remove('active');
});

navUseCases.addEventListener('click', (event) => {
    event.preventDefault();
    secondMenuList.classList.toggle('active');
    firstMenuList.classList.remove('active');
});

navFeatures.addEventListener('mouseover', () => {
    secondMenuList.classList.remove('active');
})

navUseCases.addEventListener('mouseover', () => {
    firstMenuList.classList.remove('active');
});

document.addEventListener('click', (event)=> {
    if(!navFeatures.contains(event.target) && !firstMenuList.contains(event.target)) {
        firstMenuList.classList.remove('active');
    }
    if(!navUseCases.contains(event.target) && !secondMenuList.contains(event.target)) {
        secondMenuList.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=> {
    firstMenuList.classList.remove('active');
    secondMenuList.classList.remove('active');
})

window.addEventListener('scroll', ()=> {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', ()=> {
    const allButtons = document.querySelectorAll('.ans-button');
    allButtons.forEach(clickedButton => {
        clickedButton.addEventListener('click', ()=> {
            const answer = clickedButton.nextElementSibling;
            allButtons.forEach(otherButton => {
                if (otherButton !== clickedButton) {
                    otherButton.classList.remove('active');
                    otherButton.nextElementSibling.style.maxHeight = 0;
                }
            });
            clickedButton.classList.toggle('active');
            if (clickedButton.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = 0;
            }
        });
    });
});