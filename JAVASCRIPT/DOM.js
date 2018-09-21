function secondUl(){
    document.querySelector('#second').className = 'gold';
}

function allLi(){
    var lis = document.querySelectorAll('li');
    lis.forEach(function(li){
        li.classList.add('green');
    })
}

function thirdUl(){
    var lis = document.querySelectorAll('ul:last-of-type li');
    lis.forEach(function(li1){
        li1.classList.add('upper');
    })
}

function active(){
    var activeLi = document.querySelector('#active');
    activeLi.removeAttribute('id');
    activeLi.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.setAttribute('id', 'active');
    
}

function alertLi(){
    var aler = document.querySelector('#sixth li:first-of-type');
    alert(aler.textContent);
}

function replaceText(text){
    var listI = document.querySelector('#sixth li:last-of-type');
    listI.textContent = text;
}

function dropD(array, node){
    var drop = document.createElement('select');
    var dro = document.querySelector(node);
    dro.appendChild(drop);

    var options = array;
    options.forEach(function(optio){
        var t = document.createElement('option');
        var text = document.createTextNode(optio);
        t.appendChild(text);
        drop.appendChild(t);
    })
}

function redBorder(){
    var inputs = document.querySelectorAll('input');
    inputs.forEach(function(input){
        console.log(input.getAttribute('required'));
        if(input.getAttribute('required') == null){
            input.setAttribute('style', 'border: 10px solid black')
        }
    })
}



secondUl();
allLi();
thirdUl();
active();
alertLi();
replaceText('Some new text');
dropD(['prvi', 'drugi', 'treci'], '#dro');
redBorder();