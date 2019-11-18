$(function () {
    $("#lightSlider").lightSlider({
        item: 5,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,

        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////

        speed: 400, //ms'
        auto: true,
        loop: true,
        slideEndAnimation: true,
        pause: 2000,

        keyPress: false,
        controls: false,
        prevHtml: '',
        nextHtml: '',

        rtl:false,
        adaptiveHeight:false,

        vertical:false,
        verticalHeight:500,
        vThumbWidth:100,

        thumbItem:10,
        pager: false,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',

        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        swipeThreshold: 40,

        responsive : [
            {
                breakpoint:1000,
                settings: {
                    item:4,
                    slideMove:1,
                    slideMargin:6,
                }
            },
            {
                breakpoint:720,
                settings: {
                    item:2,
                    slideMove:1
                }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                }
            }
        ],

        onBeforeStart: function (el) {},
        onSliderLoad: function (el) {},
        onBeforeSlide: function (el) {},
        onAfterSlide: function (el) {},
        onBeforeNextSlide: function (el) {},
        onBeforePrevSlide: function (el) {}
    });

    $("section[data-type='background']").each(function() {
        var parallax=$(this);
        speed = .1;
        $(window).scroll(function () {

            [].slice.call(parallax).forEach(function (el, i) {

                var windowYOffset = -window.pageYOffset,
                    elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

                el.style.backgroundPosition = elBackgrounPos;


            })

        })
    })
});