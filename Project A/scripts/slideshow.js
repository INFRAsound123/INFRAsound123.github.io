var i =0;
  var images=[];
  
  
  
  images[0]= 'pic1.jpg';
  images[1]= 'pic2.jpg';
  images[2] = 'pic3.png';
  
  function changeImg(){
    document.slideShow.src = images[i];
    
    if(i<images.length - 1){
      i++
    } else{
      i=0;
    }
    window.onload=changeImg;
    return false;
  }
  
global.$("button").click(function(){
  global.$("div").animate({left: '250px'});
});