/* Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"  */

var myString = "My random string";

function insertString(string, insert, position){
    var print= '';
    for(var i = 0; i < string.length; i++){
        if(i == position){
            print += insert  + ' ';
            print += string[i];
        }else{
            print += string[i];
        }
    } 
    console.log(print);
}

insertString(myString, 'JS', 10);

/* Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

[NaN, 0, 15, false, -22, '', undefined, 47, null] */

var g = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function skipElem(array){
    var print = [];
    for(var i = 0; i < array.length; i++){
        if(isFinite(array[i]) && (typeof(array[i]) != 'undefined') && array[i] != null){
            print.push(array[i]);
        }
    }
    console.log(print);
}

skipElem(g);

/* Write a program to filter out falsy values from the array.

[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]  */

var t = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function onlyTrue(array){
    var print = [];
    for(var i = 0; i < array.length; i++){
        if(array[i]){
            print.push(array[i]);
        }
    }
    console.log(print);
}

onlyTrue(t);

/* Write a function that reverses a number. The result must be a number.

12345 -> 54321 // Output must be a number */

var num = 12345;

function reverseNumber(number){
    var print = '';
    var numS = '' + number;
    for(var i = numS.length - 1; i >= 0; i--){
        print += numS[i];
    }
    console.log(print);
}

reverseNumber(num);

/*  Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]   */

var g = [7, 9, 0, -2];

function lastElem(array, n){
    var print = [];
    if(typeof n == 'undefined'){
        console.log(array[array.length - 1]);
    }else{
        for(var i = array.length - n; i < array.length; i++){
            print.push(array[i]);
        }
    }
    console.log(print);
}

lastElem(g,3);

/* Write a function to create a specified number of elements with pre-filled numeric value array.

6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null]   */

function numOfElem(numOfElems, element){
    var print = [];
    for(var i = 0; i < numOfElems; i++){
        print.push(element);
    }
    console.log(print);
}

numOfElem(8, 'Uros');
numOfElem(5, 8)

/* Write a function that says whether a number is perfect.

28 -> 28 is a perfect number.  */

function isPerfectNumber(number){
    var sum = 0;
    for(var i = 1; i < number; i++){
        if(number % i == 0){
            sum += i;
        }
    }    
    if(sum == number){
        console.log(number + ' is perfect number!');
    }else{
        console.log(number + ' is not perfect number!');
    }
    console.log(sum);
}

isPerfectNumber(496);

/* Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times" */

var a = 'The fox quick brown fox fox';
var b = 'fox';

function findWord(text, word){
    var x = 0;
    var y = 0;
    for(var i = 0; i < text.length; i++){
        if(text[i] == word[0]){
            for(var j = i; j < i + word.length; j++){
                if(text[j] == word[j - i]){
                    y++;
                }
                if(y == word.length){
                    x++;
                }
            }
            y = 0;
        }
    }
   
   
    console.log(word + ' was found ' + x + ' times!');
}

findWord(a, b);
