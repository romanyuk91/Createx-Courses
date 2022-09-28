// benefits tabs

const tabHeaders = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]')

tabHeaders.forEach(function(item){
    item.addEventListener('click', function(){
        contentBoxes.forEach(function(item){
            item.classList.add('hidden');
        });
        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('hidden')
    });
});

// events show more

const showMoreBtn = document.querySelector('.btn-events-more');
const eventsMoreText = document.querySelector('.events-more-text');
const eventItem = document.querySelector('.events-item');
const eventLength = document.querySelectorAll('.events-item').length;
let items = 3;

showMoreBtn.addEventListener('click', function(){

	items += 3;
	const array = Array.from(document.querySelector('.events-list').children);
	const visItems = array.slice(0, items);
	visItems.forEach(el => el.classList.toggle('is-visible'));

	if (eventItem.classList.contains('is-visible')) {
        showMoreBtn.textContent = 'Hide last events';
        eventsMoreText.classList.add('hidden')
	} else {
        showMoreBtn.textContent = 'Explore all events';
        eventsMoreText.classList.remove('hidden')
    }
});

// carousel team

const owlTeam = $('.team-slider');
owlTeam.owlCarousel({
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 4,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,

    responsive: {
        // breakpoint from 0 up
        0 : {
            items: 2,
        },

        // breakpoint from 576 up
        // 576 : {
        //     items: 2,
        //     margin: 10,
        // },

        // breakpoint from 768 up
        768 : {
            items: 3,
            margin: 20
        },

         // breakpoint from 992 up
         992 : {
            items: 4,
        }
    },
    
});
$('.slider-btn-prev').click(function() {
    owlTeam.trigger('prev.owl.carousel');
})

$('.slider-btn-next').click(function() {
    owlTeam.trigger('next.owl.carousel');
})

// carousel testimonials

const owlTestimonials = $('.testimonials-slider');
owlTestimonials.owlCarousel({
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 1,
    dots: false,
    smartSpeed: 1500
});

$('.testimonials-btn-prev').click(function() {
    owlTestimonials.trigger('prev.owl.carousel');
})

$('.testimonials-btn-next').click(function() {
    owlTestimonials.trigger('next.owl.carousel');
})


// modal windows

const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalCloseButtons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');

// Кнопки "открыть модальное окно"
modalButtons.forEach(function(item){
    item.addEventListener('click', function(){
        const modalId = this.dataset.modalButton;
        const modal = document.querySelector('#' + modalId);
        modal.classList.remove('hidden');
        // Закрытие модального окна кликом вне кнопки
        modal.querySelector('.modal-card').addEventListener('click', function(event){
                event.stopPropagation();
        });
    });
});

// Кнопки "закрыть модальное окно"
modalCloseButtons.forEach(function(item){
    item.addEventListener('click', function(){
        const modal = this.closest('[data-modal]');
        modal.classList.add('hidden');

    });
});

// Закрытие модального окна кликом вне кнопки

allModals.forEach(function(item){
    item.addEventListener('click', function(event){
        this.classList.add('hidden')
    });
});

// mobile nav

const modileButton = document.querySelector('.mobile-nav-btn');
const mobileMenu = document.querySelector('.nav');

modileButton.addEventListener('click', function(){
    mobileMenu.classList.toggle('active');
    if (mobileMenu.classList.contains('active')) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
});



