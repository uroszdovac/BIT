var body = document.querySelector('body');
var player = document.querySelector('#player');

body.addEventListener('click', function(e){
    var left = e.clientX - 75 + 'px';
    var top = e.clientY - 75 + 'px';
    player.style.top = top;
    player.style.left = left;
    console.log(top);
    console.log(left);
})