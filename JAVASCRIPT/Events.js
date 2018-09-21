var backGroundButton = document.querySelector('#toggleBG');
var body = document.querySelector('body');
var autoC = document.querySelector('#autoChange');
var handle;

backGroundButton.addEventListener('click', changeColor);
autoC.addEventListener('click', autoChangeColor);

function changeColor(){
    body.classList.toggle('blue');
}


function autoChangeColor(){
    if(autoC.getAttribute('value') === 'TurnOff'){
        handle = setInterval(changeColor, 1000);
        autoC.setAttribute('value', 'TurnOn');
        autoC.textContent = "Turn Off";
    }else{
        autoC.setAttribute('value', 'TurnOff');
        clearInterval(handle);
        autoC.textContent = 'Turn On';
    }
}


