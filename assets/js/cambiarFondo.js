//cambiar imagen de fondo por una lista aleatoria.
//Nahuel Jose
$( function(){

var images = ['assets/img/F100008060.jpg',
            'assets/img/F100022451.jpg',
            'assets/img/F100028281.jpg',
            'assets/img/F100028502.jpg'];
var i = 0;
var renew = setInterval(function(){
    if(images.length == i){
        i = 0;
    }
    else {
    document.getElementById("bannerImage").src = images[i]; 
    i++;

}
},10000);


});