/* Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement. */

function vowels(string){
    var counter = 0;
    for(var i = 0; i < string.length; i++){
        switch (string[i]) {
            case 'a':
                counter++;
                break;
            case 'e' :
                counter++;
                break;
            case 'i' :
                counter++;
                break;
            case 'o' :
                counter++;
                break;
            case 'u' :
                counter++;
                break;
            default:
                break;
        }
    }
    return counter;
}

console.log(vowels('prozori'));

/* Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]  */

var a = ['a','b','c'];
var b = [1,2,3];

function combineTwoArrays (string1, string2){
    var print = [];
    for(var i = 0, j =0; i < string1.length; i++){
        if(string1[i] != undefined){
            print[j] = string1[i];
            j++;
        }
        if(string2[i] != undefined){
            print[j] = string2[i];
            j++;
        }
    }
    return print;
}

console.log(combineTwoArrays(a,b))

/* Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]  */

var q = [1,2,3,4,5,6];

function rotate (array, k){
    var print = [];
    for(var i = array.length - (array.length - k), j = 0; i < array.length; i++, j++){
        print[j] = array[i]
    }
    for(var h = 0; h < k; h++,j++){
        print[j] = array[h];
        console.log(j)
    }
    return print;
}

console.log(rotate(q, 2));

/* second way */
function rotate(a, k) {
    var tmp;

    for (i = 0; i < a.length - k; i++) {
        tmp = a[i];
        a[i] = a[i + k];
        a[i + k] = tmp;

    }
    return a;

}

var a = [1, 2, 3, 4, 5, 6];

console.log(rotate(a, 2));

/* Write a function that takes a number and returns array of its digits. */

function digits(number){
    var num = number + '';
    var print = [];
    for(var i = 0; i < num.length; i++){
        print[i] = parseFloat(num[i]);
    }
    return print;
}

console.log(digits(12345));

/* Write a program that prints a multiplication table for numbers up to 12. */

function multiTable(){
    var print = '';
    for(var i = 0; i <= 12; i++){
        for(var j = 0; j <= 12; j++){
            print += i + ' * ' + j + ' = ' + j * i + '\n';
        }
    }
    return print;
}

console.log(multiTable());

/* Write a function to input temperature in Centigrade and convert to Fahrenheit. */

function celsiusToFahrenheit(temperature){
    var fahrenheit = temperature * 1.8 + 32;
    return temperature + ' C is ' + fahrenheit + ' in fahrenheits.'; 
}

console.log(celsiusToFahrenheit(30));

/* Write a function to find the maximum element in array of numbers. Filter out all non-number elements.  */

var a = [12, 5, NaN, Infinity, "false", 25, true];

function maximum(array){
    var max = array[0];
    for(var i = 0; i < array.length; i++){
        if(array[i] > max && typeof array[i] == 'number' && isFinite(array[i])){
            max = array[i];
        }
    }
    return max;
}

console.log(maximum(a));

/* Write a function to find the maximum and minimum elements. Function returns an array.  */

var e = [12, 32, 45, 6, 89, 90, 159];

function maxAndMin(array){
    var max = array[0];
    var min = array[0];
    for(var i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i];
        }
        if(array[i] > max){
            max = array[i];
        }
    }

    var print = [min, max];
    return print;
}

console.log(maxAndMin(e));

/* Write a function to find the element that occurs most frequently.  */

var a = [1, 2, 3, 4, 5, 6, 6, 6, 6, 5, 5, 2, 2, 2, 2, 2, 2, 2,6,6,6,6,6,6,6,6,6,6,6,66,6,6,,6,6,6,6,6,6,];

function mostFrequently(array){
    var mostFreqElem;
    for(var i = 0; i < array.length; i++){
        var frequently = 1;
        var counter = 1;
        for(var j = i + 1; j < array.length; j++){
            counter = 1;
            if(array[i] == array[j]){
                counter++;
            }
        }
        if(counter > frequently){
            frequently = counter;
            mostFreqElem = array[i];
        }
    }
    return mostFreqElem;
}

console.log(mostFrequently(a));

/* Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.  */

var f = [12, 34, 45, 65, 12, 46];

function firstMiddleLast(array){
    var first;
    var middle;
    var last;
    if(array.length % 2 == 0){
        first = array[0];
        middle = '/';
        last = array[array.length - 1];
    }else{
        first = array[0];
        middle = array[array.length / 2 - 0.5];
        last = array[array.length - 1];
    }
    return 'First: ' + first + '\n' + 'Midle: ' + middle + '\n' + 'Last: ' + last;
}

console.log(firstMiddleLast(f));

/* Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.  */

function average(){
    var average = 0;
    for(var i = 0; i < arguments.length; i++){
        average += arguments[i] / arguments.length;
    }

    return average;
}

console.log(average(1, 2, 3));

/* Write a function to find all the numbers greater than the average. */

function graterThanAverage(){
    var average = 0;
    var graterThanAverage = [];
    for(var i = 0; i < arguments.length; i++){
        average += arguments[i] / arguments.length;
    }
    for(var i = 0, j = 0; i < arguments.length; i++){
        if(average < arguments[i]){
            graterThanAverage[j] = arguments[i];
            j++;
        }
    }
    
    return graterThanAverage;
}

console.log(graterThanAverage(1, 2, 3));


