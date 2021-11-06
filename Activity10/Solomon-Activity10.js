$(document).ready(function() {

 
        // preload images
    $("#image_list a").each(function ()
    {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    // set up event handlers for links  
    $("#image_list a").click(function (evt)
    
    {
        var imageURL = $(this).attr("href");
        $("#image").attr("src", imageURL);
        var caption = $(this).attr("title");
        $("#caption").fadeOut (3000,function ()
        {
            $("#caption").text(caption).fadeIn(3000)
            $("#caption").fadeIn(3000).animate({fontSize:'2em'})

        });
        $("#image").fadeOut(3000, function ()
        {
            $("#image").attr("src", imageURL).fadeIn(3000);
        })
        
    // cancel the default action of each link

    evt.preventDefault();

    });
 
    // move the focus to the first link
     $("li:first-child a").focus();

}) // end ready


