$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 8,
    center: true,
    startPosition: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:1
        },
        1150:{
            items:2
        },
        1500:{
            items:3
        }
    }
})
