/* Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. */

for(var i = 0; i < 15; i++){
    if(i % 2 == 0){
        console.log(i + ' is even number.');
    }else{
        console.log(i + ' is odd number.');
    }
}

/* Write a program to sum the multiples of 3 and 5 under 1000. */ 

var sum = 0;

for(var i = 0; i < 1000; i++){
    if(i % 3 == 0 && i % 5 == 0){
        sum += i;
    }
}

console.log(sum);

/* Write a program to compute the sum and product of an array of integers */

var a = [1, 2, 3, 4, 5, 6];
var sum = 0;
var product = 1;

for(var i = 0; i < a.length; i++){
    sum += a[i];
    product *= a[i];
}

console.log('Sum: ' + sum + ', Product: ' + product);

 /* Write a program which prints the elements of the following array as a single string. */

 var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
 var print = '';

 for(var i = 0; i < x.length; i++){
    print += x[i];
 }

 console.log(print);
 
 /* Write a program that prints the elements of the following array. */

 var a = [
    [1, 2, 1, 24], 
    [8, 11, 9, 4], 
    [7, 0, 7, 27]
    ];

for(var i = 0; i < a.length; i++){
    for(var j = 0; j < a[i].length; j++){
        console.log(a[i][j]);
    }
}

/* Write a program that outputs the sum of squares of the first 20 numbers. */

var sum = 0;

for(var i = 0; i <= 20; i++){
    var square = i * i;
    sum += square;
}

console.log(sum);

/* Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade.  */

var students = [
    ['David', 80],
    ['Marko', 77],
    ['Dany', 88],
    ['John', 95],
    ['Thomas', 68]
];

var gradeSum = 0;

for(var i = 0; i < students.length; i++){
    gradeSum += students[i][1];
}

var averGrade = gradeSum / students.length;
console.log(averGrade);

if (averGrade < 60 ) {
    console.log('Average grade is F.');
} else if( averGrade < 70){
    console.log('Average grade is D');
}else if( averGrade < 80){
    console.log('Average grade is C');
}else if( averGrade < 90){
    console.log('Average grade is B');
}else if( averGrade < 100){
    console.log('Average grade is A');
}

/* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those). */

for(var i =0; i <= 100; i++){
    if(i % 5 == 0 && i % 3 == 0){
        console.log('FizzBuzz');
    }else if(i % 3 == 0 ){
        console.log('Fizz');
    }else if(i % 5 == 0){
        console.log('Buzz');
    }else{
        console.log(i)
    }
}

