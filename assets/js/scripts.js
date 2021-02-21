$('.owl-carousel').owlCarousel({
    loop:false,
    nav:false,
    items: 16,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:8
        },
        1000:{
            items:12
        }
    }

})
var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.fa-chevron-right').click(function() {
    owl.trigger('next.owl.carousel');
})
function hideSidebar(){
    var sidebarID=document.getElementById('collapseExample');
    if(sidebarID.classList.contains("sidebarShow")){
        sidebarID.classList.remove("sidebarShow");
        sidebarID.classList.add("sidebarHide");
    }
    else if(sidebarID.classList.contains("sidebarHide")){
        sidebarID.classList.remove("sidebarHide");
        sidebarID.classList.add("sidebarShow");
    }
}