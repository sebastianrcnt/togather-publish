/*
Resize mobile-wrap; ios frame issue
*/
var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', vh.toString()+'px');

window.addEventListener('resize', function(){
    resizeWindow();
});

function resizeWindow() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh.toString()+'px');
}

document.addEventListener("DOMContentLoaded", function() {
    resizeWindow();
});