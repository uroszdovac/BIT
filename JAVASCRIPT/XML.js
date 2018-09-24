function xml(ipAddress){
    var newXHR = new XMLHttpRequest();

    newXHR.open('GET', ipAddress, true);

    newXHR.send()

    newXHR.onload = function(){
            // var data = JSON.parse(newXHR.responseText)
            console.log(newXHR.responseText);
            var data = JSON.parse(newXHR.responseText);
            console.log(data);
            
            console.log(data.results[0].email);

            
    
    }
}

xml('https://randomuser.me/api/?results=4')

