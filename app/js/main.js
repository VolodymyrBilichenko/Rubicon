const swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 10,

    breakpoints: {
        768: {
            spaceBetween: 0,
            enabled: false,
        },
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

function showCalendar() {
    var dateInput = document.getElementById("myDate");
    var calendar = new Date();
    var picker = new Calendar(dateInput, calendar);
    picker.show();
}