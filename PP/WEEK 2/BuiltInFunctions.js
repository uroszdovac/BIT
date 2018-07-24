/* Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]  */

var e = ["1", "21", undefined, "42", "1e+3", Infinity];

function stringToNumber(array){
    var print= [];
    for(var i = 0, j= 0; i < array.length; i++){
        var num = !isNaN(parseFloat(array[i]));
        if(num && isFinite(array[i])){
            print[j] =parseFloat(array[i]);
            j++;
        }
    }
    console.log(print);
}

stringToNumber(e);


/* Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
    Output: “015-2247”  */
    
    var y = [NaN, 0, 15, false, -22, '', undefined, 47, null];

    function joinElems(array){
        var print = '';
        for(var i = 0; i < array.length; i++){
            var num = !isNaN(parseFloat(array[i]));
            if(num){
                print += array[i];
            }
        }
        console.log(print);
    }

    joinElems(y);

    /* Write a program to filter out falsy values from the array.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
    Output: [15, -22, 47]  */

    var g = [NaN, 0, 15, false, -22, '', undefined, 47, null];

    function filterOutFalsy(array){
        var print = [];
        for(var i = 0, j = 0; i < array.length; i++){
            if(array[i]){
                print[j] = array[i];
                j++;
            }
        }
        console.log(print);
    }

    filterOutFalsy(g);

/* Write a program that calculates a number of integer values in the array.

	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
    Output: 3  */

    var n = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];

    function integerValues(array){
        var counter = 0;
        for(var i = 0; i < array.length; i++){
            if(Number.isInteger(array[i])){
                counter++;
            }
        }
        console.log(counter);
    }

    integerValues(n);

/* Write a program that calculates a number of float values in the array.

    Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
    Output: 2  */

    var k = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];

    function numberOfFloat(array){
        var counter = 0;
        var print =[];
        for(var i = 0; i < array.length; i++){
            var num = parseFloat(array[i]);
            if(!isNaN(num) && (parseInt(array[i]) != array[i])){
                counter++;
                print.push(array[i]);
            }
        }
        console.log(print);
        console.log(counter);
    }

    numberOfFloat(k);