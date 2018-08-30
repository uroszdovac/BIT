/*Write a program to check if the variable is a number and if it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”.*/

var input = 124;

if(typeof input == 'number' && input % 2 == 0){
    var res = input /2;
    console.log(input + ' / 2 = ' + res);
}else{
    console.log('X');
    
}

/*Write a conditional statement to find the largest of five numbers. Display the result in the console.*/

var a = -5;
var b = -2;
var c = 6;
var d = 0;
var f = -1;

if(a > b && a > c && a > d && a > f){
    console.log(a);
}else if(b > a && b > c && b > d && b > f){
    console.log(b);
}else if(c > a && c > b && c > d && c > f){
    console.log(c);
}else if(d > a && d > c && d > b && d > f){
    console.log(d);
}else if(f > a && f > c && f > d && f > b){
    console.log(f);
}

/*Write a conditional statement to sort three numbers.*/

var x = 0;
var y = -1;
var z = 4;

if (x > y && x > z) {
    if (y > z) {
        console.log(x + ', ' + y + ', ' + z);
    } else {
        console.log(x + ', ' + z + ', ' + y);
    }
} else if (y > x && y > z) {
    if (x > z) {
        console.log(y + ', ' + x + ', ' + z);
    } else {
        console.log(y + ', ' + z + ', ' + x);
    }
} else if (z > x && z > y) {
    if (x > y) {
        console.log(z + ', ' + x + ', ' + y);
    } else {
        console.log(z + ', ' + y + ', ' + x);
    }
}

/*Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.*/

var x = -3;
var y = -7;
var z = 2;

if(x * y * z > 0){
    console.log('The sign is +');
}else{
    console.log('The sign is -');
}

/*Write a program that compares two numbers and displays the larger. Display the result in the console.*/

var a = 192;
var b = 14;

if(a > b){
    console.log(a);
}else{
    console.log(b);
}
