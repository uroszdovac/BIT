var mario = document.querySelector('#mario');
var marioRun = document.querySelector('#marioRunning');
var bG = document.querySelector('#bg');
var body = document.querySelector('body');

body.addEventListener('keydown', function(e){
    var pressed = e.keyCode;
    if(pressed === 39){
        mario.style.display = 'none';
        marioRun.style.display = 'inline';
        bG.style.left = '-10px';
    }
 })

body.addEventListener('keyup', function(e){
    var pressed = e.keyCode;
    if(pressed === 39){
        mario.style.display = 'inline'
        marioRun.style.display = 'none';
    }
})



body.addEventListener('keydown', function(e){
    var pressed = e.keyCode;
    if(pressed === 32){
        mario.style.bottom = '170px';
    }
})

body.addEventListener('keyup', function(e){
    var pressed = e.keyCode;
    if(pressed === 32){
        mario.style.bottom = '100px'
    }
})