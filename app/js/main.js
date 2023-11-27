const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
});

// questions
const questionsList = document.querySelectorAll('.questions__list li');

questionsList.forEach((listItem) => {
    const listItemHeader = listItem.querySelector('.questions__list_header');
    const listItemBody = listItem.querySelector('.questions__list_body');

    listItemHeader.addEventListener('click', () => {
        const isActive = listItem.classList.contains('questions__list_active');

        console.log(listItem)
        if (!isActive) {
            listItem.classList.add('questions__list_active');
            listItemBody.classList.add('questions__body_active');
        } else {
            listItem.classList.remove('questions__list_active');
            listItemBody.classList.remove('questions__body_active');
        }
    });
});

// header aside

const configHeaders = document.querySelectorAll('.config__header');


configHeaders.forEach((configHeader) => {
    configHeader.addEventListener('click', () => {
        const isActive = configHeader.classList.toggle('config__header_active');
        const configBody = configHeader.nextElementSibling; // Знаходимо наступний елемент, який є config__body

        if (isActive) {
            configBody.classList.add('config__body_active');
        } else {
            configBody.classList.remove('config__body_active');
        }
    });
});

//sort

const configSorts = document.querySelectorAll('.input__head')

configSorts.forEach((configSort) => {
    configSort.addEventListener('click', () => {
        const isActive = configSort.classList.toggle('input__head_active');
        const configBody = configSort.nextElementSibling

        if (isActive) {
           configBody.classList.add('input__body_active');
        } else {
            configBody.classList.remove('input__body_active');
        }
    })
})