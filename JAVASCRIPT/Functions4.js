/* Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no   */

var e = 3;
var a = [5, -4.2, 3, 7];

function isInArray(element, array){
    var print = 'no'; 
    for(var i = 0; i < array.length; i++){
        if(array[i] == element){
            print = 'yes';
        }
    }
    console.log(print);
}

isInArray(e,a);

/* Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]  */

var l = [-3, 11, 5, 3.4, -8];

function multiPositives(array){
    var print = [];
    for(var i = 0; i < array.length; i++){
        if(array[i] > 0){
            print.push(array[i] * 2);
        }else{
            print.push(array[i]);
        }
    }
    console.log(print);
}

multiPositives(l);

/* Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3  */

var t = [4, -4, 2, 2, -1, 6];

function minimum(array){
    var min = array[0];
    var position = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i];
            position = i;
        }
    }
    console.log(min + ', ' + position);
}

minimum(t);

/* Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2  */

var q = [4, 2,-12, 2, -1, 6, 0];

function secondSmallest(array){
    var min = array[0];
    var position = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i];
            position = i;
        }
    }
    var min2 = array[0];
    for(var j = 0; j < array.length; j++){
        if(j == position){
            continue;
        }else if(array[j] < min2){
            min2 = array[j];
        }
    }
    console.log(min2);
}

secondSmallest(q);

/* Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16  */

var f = [3, 11, -5, -3, 2];

function sumOfPositives(array){
    var print = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] >0){
            print += array[i];
        }
    }
    console.log(print);
}

sumOfPositives(f);

/* Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
    Output: The array isn’t symmetric. */
    
var t = [2, 4, 6, -2, 7, -2,6, 4, 2];

function isSymmetric(array){
    var print = "The array is symmetric."
    for(var i = 0, j = array.length -1; i < j; i++, j--){
        if(array[i] != array[j]){
            print = "The array is'nt symmetric."
        }
    }
    console.log(print);
}

isSymmetric(t);

/* Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9] */

var h = [4, 5, 6, 2];
var p = [3, 8, 11, 9];

function intertwinesArrays(array1, array2){
    var print = [];
    for(var i = 0; i < array1.length; i++){
        print.push(array1[i]);
        print.push(array2[i]);
    }
    console.log(print);
}

intertwinesArrays(h, p);

/* Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] */

var o = [4, 5, 5, 7, 6, 2];
var w = [3, 8, 11, 9];

function concatenatesArrays(array1, array2){
    var print = [];
    for(var i = 0; i < array1.length + array2.length; i++){
        if(i < array1.length){
            print[i] = array1[i];
        }else{
            print[i] = array2[i - array1.length];
        }
    }
    console.log(print);
}

concatenatesArrays(o, w);

/* Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]  */

var e = 2;
var a = [4, 6, 2, 8, 2, 2];

function delatesElement(element, array){
    var print = [];
    for(var i = 0, j = 0; i < array.length; i++){
        if(array[i] == element){
            continue;
        }else{
            print[j] = array[i]
            j++;
        }
    }
    console.log(print);
}

delatesElement(e, a);

/* Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]  */

var e = 78;
var p = 3;
var a = [2, -2, 33, 12, 5, 8];

function insertElement(element, position, array){
    var print = [];
    if(position > array.length){
        console.log('ERROR');
    }
    for(var i = 0, j = 0; i < array.length; i++, j++){
        if(i == position){
            print[j] = element;
            j = j+1;
            print[j] = array[i];
        }else{
            print[j] = array[i];
        }
    }   
    console.log(print);
}

insertElement(e, p, a);

