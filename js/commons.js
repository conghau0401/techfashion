
$(function() {
    // include files
    $("#header").load("/commons/header.html");
    $("#contact").load("/commons/contact.html");
    $("#why").load("/commons/why.html");
    $("#footer").load("/commons/footer.html");
    $("#lets-talk").load("/commons/talk.html");
    // owl plugins
    $('.owl-plugins').owlCarousel({
        loop: true,
        margin: 30,
        dotsEach: true,
        navigation: true,
        pagination: false,
        responsive:{
            0:{
                items: 1.5,
                center: true,
                margin: 10,
            },
            600:{
                items: 2,
                center:true,
                margin: 10,
            },
            1000:{
                items: 3,
                nav: false,
                dots: true,
            }
        }
    })
    // owl effective
    if ($(".owl-effective").length) {
        var serviceSwiper = new Swiper(".owl-effective", {
            loop: false,
            breakpoints: {
                0: {
                    slidesPerView: 1.37,
                    spaceBetween: 15,
                    pagination: {
                        el: ".swiper-pagination1",
                    },
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 4.3,
                    spaceBetween: 20,
                },
            },
        });    
    }
    // owl featured
    if ($(".owl-featured").length) {
        var serviceSwiper = new Swiper(".owl-featured", {
            loop: false,
            breakpoints: {
                0: {
                    slidesPerView: 1.3,
                    spaceBetween: 15,
                    pagination: {
                        el: ".swiper-pagination",
                    },
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            },
        });    
    }
    $(window).scroll(function() {
        let _window = $(window).scrollTop();
        if (_window > 0) {
            $("#header").addClass("active");
        } else {
            $("#header").removeClass("active");
        }
    })
    // load page
    setTimeout(function(){
        $("#pre-loader").fadeOut(1000);
    },500);
    setTimeout(() => {
        AOS.init({
            once: true,
            disable: 'mobile',
        });
        // toggle menu mobile
        $(".icon-bar, .overlay").on("click", function() {
            $(".menu-container").toggleClass("active");
            $(".icon-bar").toggleClass("active");
            $(".overlay").toggleClass("active");
        });
        //lang
        $("ul.toggle-lang li").click(function() {
            let name = $(this).children("span.text").children("b").text();
            $(".lang-active").children(".name-lang").children("span.lang").text(name);
        })
    }, 1000);
})