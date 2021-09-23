$('.service-slide').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

//For Portfolio Filter

let portfolioIsotope = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
        columnWidth: '.grid-sizer'
    }
});

$('#portfolio-filter li').on( 'click', function() {
    $("#portfolio-filter li").removeClass('btn-primary');
    $(this).addClass('btn-primary');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
});


new WOW().init();

$('.counter-up').counterUp({
    delay: 10,
    time: 1000
})


let typed = new Typed('.typing', {
    strings: ["Phone Myat Pyae Sone", "a FrontEnd Developer","a Freelancer"],
    stringsElement: null,
    typeSpeed: 40,
    startDelay: 500,
    backSpeed: 20,
    backDelay: 1000,
    loop: true,
    loopCount: Infinity,
});

var waypoints = $('#about').waypoint(function(direction) {
    if(direction = "down"){
        $(".site-nav").toggleClass("stuck");
        setActive('home')
    }else{
        $(".site-nav").toggleClass("stuck")
    }
}, {
    offset: "90%"
})

function setActive(current){
    $(`.nav-link`).removeClass("active");
    $(`.nav-link[href='#${current}']`).addClass("active");
}

function navScroll(){
    let currentSection = $("section[id]");
    currentSection.waypoint(function (direction) {
        if(direction = "down"){
            let currentSectionId =$(this.element).attr('id');
            setActive(currentSectionId);
        }
    },{
        offset:'150px'
    });

    currentSection.waypoint(function (direction) {
        if(direction = "up"){
            let currentSectionId =$(this.element).attr('id');
            setActive(currentSectionId);
        }
    },{
        offset:'150px'
    });
}

navScroll();

$(".navbar-toggler").click(function (){
    let result = $(".navbar-collapse").hasClass("show");
    if(result){
        $(".menu-icon").removeClass("fas fa-times").addClass("fa fa-bars");
        $(".navbar-collapse").removeClass("show");
    }else{
        $(".menu-icon").removeClass("fa fa-bars").addClass("fas fa-times");
        $(".navbar-collapse").addClass("show");
    }
});

const colors = $(".colors");
let i;
for(i=0;i<colors.length;i++){
    colors[i].addEventListener('click',changeColor)
}

function changeColor(){
    let color = this.getAttribute("data-color");
    let hover = this.getAttribute("data-hover");
    document.documentElement.style.setProperty('--primary',color);
    document.documentElement.style.setProperty('--hover',hover);
}

function changeMode() {
    document.body.classList.toggle("night-mode");
    document.getElementById("mode-icon").classList.toggle("fa-sun")
}

function themeChange(){
    $(".theme-colors").toggleClass("theme-colors-active")
}

$(window).on("load",function () {
    $(".loader-container").fadeOut(1000,function () {
        $(this).remove();
    });
})