$(function () {
    var mixer = mixitup('.directions__list');
    
    $('.directions__filter-btn').on('click', function () {
        $('.directions__filter-btn').removeClass('directions__filter-btn--active')
        $(this).addClass('directions__filter-btn--active')
    })

    $('.team__slider').slick({
    arrows: false,
		slidesToShow: 4,
		infinite: true,
    draggable: false,
    waitForAnimate: false,
    })
    $('.team__slider-prev').on('click', function (e) {
      e.preventDefault()
      $('.team__slider').slick('slickPrev')
    })
    $('.team__slider-next').on('click', function (e) {
      e.preventDefault()
      $('.team__slider').slick('slickNext')
    })

    $('.testimonials__slider').slick({
      arrows: FontFaceSetLoadEvent,
      dots: true,
      appendDots: $('.testimonials__dots'),
      waitForAnimate: false,
    })

    $('.testimonials__prev').on('click', function (e) {
      e.preventDefault()
      $('.testimonials__slider').slick('slickPrev')
    })
    $('.testimonials__next').on('click', function (e) {
      e.preventDefault()
      $('.testimonials__slider').slick('slickNext')
    })

    // $('.program__acc-link').on('click', function (e){
    //   e.preventDefault()
    //   $(this).toggleClass('program__acc-link--active')
    //   $(this).children('.program__acc-text').slideToggle()
    // })
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(el => {
      el.addEventListener('click', (e) => {
        const self = e.currentTarget;
        const control = self.querySelector('.accordion__control');
        const content = self.querySelector('.accordion__content');
        self.classList.toggle('open');
      });
    });
  });
})
