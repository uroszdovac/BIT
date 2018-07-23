/* Write a program that calculates the maximum of two given numbers. */

function maximum(a,b){
    if(a > b){
        console.log('Maximum is ' + a);
    }else{
        console.log('Maximum is ' + b);
    }
}

maximum(12,85);

/* Write a program that checks if a given number is odd. */

function isOdd(x){
    if(x % 2 !== 0){
        console.log(x + ' is odd number');
    }else{
        console.log(x + ' is even number');
    }
}

isOdd(63);

/* Write a program that checks if a given number is a three digit long number. */

var f = 4523;

function isThreeDigitNumber(a){
   if(a > 99 && a < 999){
       console.log(a + ' is a three digits number!')
   }else{
       console.log(a + ' is not three digits number!');
   }
    
}

isThreeDigitNumber(f);

/* Write a program that calculates an arithmetic mean of four numbers. */

function aritmeticMeanOfFourNumbers(a, b, c, d){
    var sum = a + b + c + d;
    var aritmeticMean = sum / 4;
    console.log(aritmeticMean);
}

aritmeticMeanOfFourNumbers(1,2,3,4);

/* Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
*****
*   *
*   *
*   *
*****   */

function square(a){
    for(var i = 0; i <= a; i++){
        var stars = '';
        if(i == 0 || i == a){
            for(var j = 0; j < a; j++){
                stars += '*'
            }
        }else{
            for(var t = 0; t <= a; t++){
                if(t == 0 || t == a){
                    stars += '*';
                }else{
                    stars += ' ';
                }
            }
        }
        console.log(stars);
    }
    
    
}

square(5);

/* Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *                  */

function horizontalChart(){
    print = '';
    for(var i = 0; i < arguments.length; i++){
        for(var j = 0; j < arguments[i]; j++){
            print += '*';
        }
        print += '\n';
    }
    console.log(print);
}

horizontalChart(3,2,1,8);

/* Write a program that calculates a number of digits of a given number.  */

function numOfDigits(x){
    counter = 0;
    while( x > 0 ){
        x =( x - (x % 10)) / 10
        counter ++;
    }
    console.log(counter);
}

numOfDigits("583");

/* Write a program that calculates a number of appearances of a given number in a given array. */

var d = [12, 23, 12, 45, 12, 56, 12];
var t = 12;

function numOfApper(num, array){
    var counter = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] == num){
            counter ++;
        }
    }
    console.log(counter);
}

numOfApper(t,d);

/* Write a program that calculates the sum of odd elements of a given array.  */

var d = [1, 2, 3, 4, 5, 6, 7];

function sumOfOddElems(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            sum += array[i];
        }
    }
    console.log(sum);
}

sumOfOddElems(d);

/* Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A. */ 

var s = 'abracadabrA';

function numOfLetters(string){
    var counter = 0;
    for(var i = 0; i < string.length; i++){
        if(string[i] == 'a' || string[i] == 'A'){
            counter++;
        }
    }
    console.log(counter);
}

numOfLetters(s);

/* Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. */

var q = 'abc';

function concatString(string, numOfTimes){
    var print = '';
    for(var i = 0; i < numOfTimes; i++){
        print += string;
    }
    console.log(print);
}

concatString(q,5);