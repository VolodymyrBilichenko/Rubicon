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

        // Відкриваємо або закриваємо поточне питання
        if (!isActive) {
            listItem.classList.add('questions__list_active');
            listItemBody.classList.add('questions__body_active');
        } else {
            listItem.classList.remove('questions__list_active');
            listItemBody.classList.remove('questions__body_active');
        }
    });
});

