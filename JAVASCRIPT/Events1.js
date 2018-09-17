var message = document.querySelector('#message');
var sendButton = document.querySelector('#send');
console.log(sendButton)
var ul  = document.querySelector('ul');



sendButton.addEventListener('click', function(e){
    e.preventDefault();
    var listItem = document.createElement('li');
    var text = document.createTextNode(message.value);
    listItem.appendChild(text);
    ul.appendChild(listItem);
    message.value = '';
})

