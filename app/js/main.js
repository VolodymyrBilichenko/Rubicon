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

//footer

const configCitys = document.querySelectorAll('.footer__city_head');

configCitys.forEach(configCity => {
    configCity.addEventListener('click', () => {
        const isActive = configCity.classList.toggle('footer__city_head_active')
        const configBody = configCity.nextElementSibling

        if (isActive) {
            configBody.classList.add('footer__city_body_active')
        } else {
            configBody.classList.remove('footer__city_body_active')

        }
    })
})

// catalog

const alphabetButtons = document.querySelectorAll('.city__title li button');
const citySections = new Array();

for (const section of document.querySelectorAll('.city__all')) {
    citySections.push(section);
}

for (const button of alphabetButtons) {
    button.addEventListener('click', (event) => {
        const clickedLetter = event.target.textContent;
        const correspondingCitySection = citySections.find((section) => section.querySelector('.all__head h3').textContent === clickedLetter);

        if (correspondingCitySection) {
            correspondingCitySection.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    });
}

//// select


function changeCurrency(currency) {
    document.getElementById('selectedCurrency').textContent = currency;
}

function changeCurrencySort(currency) {
    document.getElementById('selectedCurrencySort').textContent = currency;
}

//////

const buttons = document.querySelectorAll('.questions__asked_des button');

for (const button of buttons) {
    button.addEventListener('click', (event) => {
        const activeButton = document.querySelector('.asked_des_active');

        if (activeButton) {
            activeButton.classList.remove('asked_des_active');
        }

        button.classList.add('asked_des_active');
    });
}