/* Write a program that shows text representation of a day in a week for a number input from 1 to 7. Print output in console. 
For input 1, output should be “Monday”. */

var input = 4;

switch (input) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        break;
}

/* Write a program that shows text representation of a day in a week for a number input from 1 to 7. All other cases output a message explaining that input must be a number between 1 and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”. */


var input = 46;

switch (input) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Input must be a number between 1 and 7');
        break;
}


/* Write a program that for a 1-7 number input (representing a day in a week) shows if that day is a weekday or weekend. All other cases output a message explaining that input must be a number between 1 and 7.
		For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”. */


var input = 4;

switch (input) {
    case 1:
        console.log('Monday');
        console.log('Its a weekday.');
        break;
    case 2:
        console.log('Tuesday');
        console.log('Its a weekday.');
        break;
    case 3:
        console.log('Wednesday');
        console.log('Its a weekday.');
        break;
    case 4:
        console.log('Thursday');
        console.log('Its a weekday.');
        break;
    case 5:
        console.log('Friday');
        console.log('Its a weekday.');
        break;
    case 6:
        console.log('Saturday');
        console.log('Its a weekend.');
        break;
    case 7:
        console.log('Sunday');
        console.log('Its a weekend.');
        break;
    default:
        console.log('Input must be a number between 1 and 7');
        break;
}

/* Write a program that for a 1-12 number input (representing a month in a year) shows that month’s name. All other cases output a message explaining that input must be a number between 1 and 12. 
		For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”. */


var input = 121;

switch(input){
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May');
        break;
    case 6:
        console.log('June');
        break;    
    case 7:
        console.log('July');
        break;
    case 8:
        console.log('August');
        break;
    case 9:
        console.log('September');
        break;  
    case 10:
        console.log('October');
        break;
    case 11:
        console.log('November');
        break;
    case 12:
        console.log('December');
        break;             
    default:
        console.log('Input must be a number between 1 and 12.');
        break;   
}

/*  Write a program that for a 1-12 number input (representing a month in a year) shows what season it is. All inputs different from 1-12 output a message explaining that input must be a number between 1 and 12.  */


var input = 11;

switch(input){
    case 12:
    case 1:
    case 2:
        console.log('It is Winter');
        break;
    case 3:
    case 4:
    case 5:
        console.log('It is Spring');
        break;
    case 6:
    case 7:
    case 8:
        console.log('It is Summer');
        break;
    case 9:
    case 10:
    case 11:
        console.log('It is Fall');
        break;
    default:
        console.log('Input must be a number between 1 and 12.');
        break;
}


/* Write a program that for a string input of a grade from “A”-“F” outputs a proper info message about that grade in the following manner: A - "Good job"", B - "Pretty good"", C - "Passed"", D - "Not so good"", F - "Failed". Input different from letters A-F outputs a message "Unknown grade" */

var input = 'F';

switch(input){
    case 'A':
        console.log('Good job');
        break;
    case 'B':
        console.log('Pretty good');
        break;
    case 'C':
        console.log('Passed');
        break;
    case 'D':
        console.log('Not so good');
        break;
    case 'F':
        console.log('Failed');
        break;
    default:
        console.log('Unknown grade');
        break;
}