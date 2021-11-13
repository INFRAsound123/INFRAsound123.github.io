$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        randomStart:true,
        captions:true,
        speed:3000,
        pagerType:'short',
        pagerSelector:'#id_pager',
        slideWidth: 500,
        slideMargin: 15
    });
});