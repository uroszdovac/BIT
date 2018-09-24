var search = document.querySelector('#search');
var users = document.querySelector('#users');

search.addEventListener('keypress', function(e){
//   e.preventDefault()

    if(e.which === 13){
        var name = search.value;
        var request = $.ajax({
            url: 'https://api.github.com/search/users?q=' + name,
            method: 'GET'
        })

        request.done(function(data){
            users.innerHTML = ''
            console.log(data);
            if(data.items.length !== 0){
                for(var i = 0; i < data.items.length; i++){
                    var userDiv = document.createElement('div');
                    userDiv.classList.add('userDiv');
                    var userImg = document.createElement('img');
                    var userName = document.createElement('p');
                    var nameText = document.createTextNode(data.items[i].login);
                    userName.appendChild(nameText);
                    userImg.setAttribute('src', data.items[i].avatar_url);
                    userDiv.appendChild(userImg);
                    userDiv.appendChild(userName);
                    users.appendChild(userDiv);
                    search.value = '';
                }
            }else{
                var invalid = document.createElement('h2');
                var invalidText = document.createTextNode('There is no user with that name!!!!');
                invalid.appendChild(invalidText);
                users.appendChild(invalid);
            }
        })

        
        
    }
    
})