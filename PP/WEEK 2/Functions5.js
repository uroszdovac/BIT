/* Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ] */ 

var s =  [ 3, 500, 12, 149, 53, 414, 1, 19 ];

function reverseMinMax(array){
    var min = array[0];
    var minPosition = 0;
    var max = array[0];
    var maxPosition = 0;
    var print = [];
    for(var i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i];
            minPosition = i;
        }else if(array[i] > max){
            max = array[i];
            maxPosition = i;
        }
    }
    for(var i = 0; i < array.length; i++){
        if(i == minPosition){
            print[i] = array[maxPosition]; 
        }else if(i == maxPosition){
            print[i] = array[minPosition];
        }else{
            print[i] = array[i];
        }
    }
    console.log(print);
}

reverseMinMax(s);

/* Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]  */

var c = [ 3, 500, -10, 149, 53, 414, 1, 19 ];

function newArray(array){
    var print = [];
    for(var i = 0; i < array.length; i++){
        if(array[i] <= 0){
            print[i] = 20;
        }else{
            print[i] = (array[i] / 2 + 5)
        }
    }
    console.log(print);
}

newArray(c);

/* Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input : [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.  */ 

var l = [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ];
var r = [ 50, 39, 63, 72, 99, 51, 83, 59 ];

function printGrades(names, points){
    var print = '';
    for(var i = 0; i < names.length; i++){
        if(points[i] < 51){
            print += names[i] + ' acquired ' + points[i] + ' and failed to complete the exam.'+ '\n';
        }else if(points[i] < 61){
            print += names[i] + ' acquired ' + points[i] + ' and earned 6.' + '\n';
        }else if(points[i] < 71){
            print += names[i] + ' acquired ' + points[i] + ' and earned 7.' + '\n';
        }else if(points[i] < 81){
            print += names[i] + ' acquired ' + points[i] + ' and earned 8.' + '\n';
        }else if(points[i] < 91){
            print += names[i] + ' acquired ' + points[i] + ' and earned 9.' + '\n';
        }else{
            print += names[i] + ' acquired ' + points[i] + ' and earned 10.' + '\n';
        }
    }
    console.log(print);
}

printGrades(l, r);

/* Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ] */

var b =  [ 13, 11, 15, 5, 6, 1, 8, 12 ];

function sortArray(array){
    var newArray = [];

    for(var i = 0; i < array.length; i++){
        var minIndex = i;
        var tempElementToSwap;

        for(var j = i + 1; j < array.length; j++){
            var elementToCompare = array[j];

            if(elementToCompare < array[minIndex]){
                minIndex = j;
            }
        }

        tempElementToSwap = array[i];
        array[i] = array[minIndex];
        array[minIndex] = tempElementToSwap;
    }

    for(var k = 0; k < array.length; k++){
        newArray[k] = array[k] * 2;
    }

    console.log(newArray);
}

sortArray(b);

/* Sort a previously defined array in a descending order and display it in the console.
Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]  */

var q = [ 13, 11, 15, 5, 6, 1, 8, 12 ];

function sortArray(array){

    for(var i = 0; i < array.length; i++){
        var maxIndex = i;
        var tempElementToSwap;
        for(var j = i + 1; j < array.length; j++){
            var elementToCompare = array[j];

            if(elementToCompare > array[maxIndex]){
                maxIndex = j;
            }
        }

        tempElementToSwap = array[i];
        array[i] = array[maxIndex];
        array[maxIndex] = tempElementToSwap;
    }

    console.log(array);
}

sortArray(q);

/*  Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000  */

function loop(){
    var sum = 0;
    for(var i = 1; i <= 1000; i++){
        if(i % 2 == 0){
            sum += i;
        }
    }

    for(var i = 1; i <= 500; i++){
        if(i % 2 != 0){
            sum -= i;
        }
    }

    sum *= 12.5;
    console.log(sum);
}

loop();

/* Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

Output: AnStJoJoDaMa  */

var d = [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ];

function getFirstTwoLetters(array){
    var print = '';

    for(var i = 0; i < array.length; i++){
        if(typeof array[i] == 'string' && array[i].length > 1){
            print += array[i][0] + array[i][1];
        }
    }
    console.log(print);
}

getFirstTwoLetters(d);

/* Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB  */ 

var r = 'Belgrade Institute of Technology';

function reverseString(string){
    var print = '';
    for(var j = string.length - 1; j >= 0;j--){
        print += string[j];
    }
    console.log(print);
}

reverseString(r);

/* Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).  */

function combinations(number){
    var print = '';
    for(var i = 1; i <= number; i++){
        for(var j = 1; j <= number; j++){
            if(i != j){
                print += '(' + i + ' ,' + j + ')';
            }
        }
    }
    console.log(print);
}

combinations(7);

/* Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false  */ 

function isPrime(number){
    var print = true;
    for(var i = 2; i < number; i++){
        if(number % i == 0){
            print = false;
        }
    }
    console.log(print);
}

isPrime(23);

/* Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true */

function isPalindrome(string){
    var print = true;
    for(var i = 0, j = string.length -1; j > i; i++, j--){
        if(string[i] == ' '){
            i++;
            if(string[j] == ' '){
                j--;
            }
        }else if(string[j] == ' '){
            j--;
            if(string[i] == ' '){
                i++;
            }
        }else if( string[i] != string[j]){
            print = false;
        }
    }
    console.log(print);
}

isPalindrome('ana voli milovana');

/*  Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9        */

function greatestDivisor(num1, num2){
    var divisors1 = [];
    var divisors2 = [];
    var print;
    for(var k = 0, l = 0 ,i = 1, j = 1; i <= num1, j <= num2; i++, j++){
        if(num1 % i == 0){
            divisors1[k] = i;
            k++;
        }
        if(num2 % j == 0){
            divisors2[l] = j;
            l++;
        }
    }
    console.log(divisors1, divisors2);
    for(var q = divisors1.length -1; q >= 0; q--){
        for(var e = divisors2.length -1; e >= 0; e--){
            if(divisors1[q] == divisors2[e]){
                print = divisors1[q];               
            }
            if(print){
                break;
            }
        }
    }
    console.log(print);
}

greatestDivisor(192, 42);
greatestDivisor(81 , 9);

/* second way  */

function greatestDivisor(number1, number2){
    var greatestDivisor = 1;
    for(var i = 1; i <= number1 && i <= number2; i++){
        if(number1 % i == 0 && number2 % i == 0){
            greatestDivisor = i;
        }
    }
    console.log(greatestDivisor);
}

greatestDivisor(192, 42);
greatestDivisor(81, 9);
