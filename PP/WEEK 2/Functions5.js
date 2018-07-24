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

function newArray(array){
    var print = [];
    var min = array[0];
    for(var i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i];
        }
    }
}