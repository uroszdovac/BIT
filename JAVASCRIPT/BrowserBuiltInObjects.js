console.log('Bla bla!')
function naavigator(){
    console.log(navigator.platform + ' ' + navigator.userAgent + ' ' + navigator.appVersion);
}

naavigator();

function isOnline(){
    if(navigator.onLine){
        console.log('You are online.');
    }else{
        console.log('You are offline!');
    }
}

isOnline();

function screen1(){
    console.log('Current width is ' + screen.width + ' and current height is ' + screen.height + ' and max possible heigght is ' + screen.availHeight);
}

screen1();

function location1(){
    console.log(location.href);
    console.log(' ' + location.hostname + ' ' + location.protocol)
}

location1();