const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },

    breakpoints: {

    },
});

function showCalendar() {
    var dateInput = document.getElementById("myDate");
    var calendar = new Date();
    var picker = new Calendar(dateInput, calendar);
    picker.show();
}