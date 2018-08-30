/* Write a function to check whether the `input` is a string or not.

"My random string" -> true
12 -> false   */

function isString(input){
    console.log(typeof input == 'string');
}

isString(123);
isString('ght');

/* Write a function to check whether a string is blank or not. 
" " -> true
12 -> false
false -> false  */

function isStringBlank(string){
    console.log(string == ' ');
}

isStringBlank('fg');
isStringBlank(' ');


/* Write a function that concatenates a given string n times (default is 1).
	"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"  */

function concatString(string, numOfTimes){
    var print = '';
    for(var i = 0; i < numOfTimes; i++){
        print += string;
    }
    console.log(print);
}

concatString('Uros', 4);

/* Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2 */

function numOfLetOcc(letter, string){
    var counter = 0;
    for(var i =0; i < string.length; i++){
        if(string[i] == letter){
            counter++;
        }
    }
    console.log(counter);
}

numOfLetOcc('a', 'Jagodina');

/* Write a function to find the position of the first occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, the function should return -1. */

function firstOcc(letter, string){
    var position = -1;
    for(var i = 0; i < string.length; i++){
        if(string[i] == letter){
            position = i + 1;
            break;
        }
    }
    console.log(position);
}

firstOcc('r', 'Marija');

/* Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1. */

function lastOcc(letter, string){
    var position = -1;
    for(var i = string.length -1; i >= 0; i--){
        if(string[i] == letter){
            position = i + 1;
            break;
        }
    }
    console.log(position);
}

lastOcc('k', 'Darko');

/* Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]                 */

function stringIntoArray(string){
    var print =[];
    for(var i = 0; i < string.length; i++){
        if(string[i] == ' '){
            print.push(null);
        }else{
            print.push(string[i]);
        }
    }
    console.log(print);
}

stringIntoArray('I love Belgrade!');

var d=['l', 'k', 'o'];
console.log(d);

/* Write a function that accepts a number as a parameter and checks if the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. */

function isNumPrime(number){
    var print =  number + ' is prime number!';
    for(var i = 2; i < number; i++){
        if(number % i == 0){
            print = number + ' is not prime number!'
            break;
        }
    }
    console.log(print);
}

isNumPrime(14);

/*  Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.

    "My random string", "_" -> "My_random_string"
    "My random string", "+" -> "My+random+string"
    "My random string" -> "My-random-string"                             */

function replaceSpaces(replaceWith, string){
    var print = '';
    for(var i = 0; i < string.length; i++){
        if(string[i] == ' '){
            print += replaceWith;
        }else{
            print += string[i];
        }
    }
    console.log(print);
}

replaceSpaces('_', 'My random string!');

/* Write a function to get the first n characters and add “...” at the end of newly created string.  */

function newString(string, size){
    var newStr = '';
    for(var i = 0; i < string.length; i++){
        if(i == size ){
            newStr += '...'
            break;
        }else{
            newStr += string[i];
        }
    }
    console.log(newStr);
}

newString('I am from Belgrade!', 9);

/*  Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000] */

var t = ["1", "21", undefined, "42", "1e+3", Infinity];

function toArrayOfNumbers(array){
    var newArray = [];
    for(var i = 0; i < array.length; i++){
        if(!isNaN(array[i]) && isFinite(array[i])){
            newArray.push(parseFloat(array[i]));
        }
    }
    console.log(newArray);
}

toArrayOfNumbers(t);

/*  Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed. */ 

function retirement(yearOfBirth, sex){
    if((2018 - yearOfBirth) < 65 && sex == 'male'){
        var yearLeft = 65 - (2018 - yearOfBirth);
        console.log('Left ' + yearLeft + ' to retirement.'); 
    }else if((2018 - yearOfBirth) < 60 && sex == 'female'){
        var yearLeft = 60 - (2018 - yearOfBirth);
        console.log('Left ' + yearLeft + ' to retirement.');
    }else{
        console.log('You are already in retirement.')
    }
}


retirement(1987, 'male');
retirement(1987, 'female');
retirement(1945, 'male');

/* Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th  */

function hunanNums(number){
    if(number == 1){
        console.log(number + 'st');
    }else if(number == 2){
        console.log(number + 'nd');
    }else if(number == 3){
        console.log(number + 'rd');
    }else{
        console.log(number + 'th');
    }
}

hunanNums(45698);