$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 10,
    center: true,
    startPosition: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        1100:{
            items:1
        },
        1150:{
            items:2
        },
        1500:{
            items:3,
            margin: 70
        }
    }
})

/* -- Botões next/prev -- */
var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})