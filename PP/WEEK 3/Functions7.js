/* Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
	Input array: [4, 5, 11, 9]
    Output array: [ 9, 5, 11, 4]  */
    
    var b = [4, 5, 11, 9];

    (function (array){
        var tmp = array[0];
        array[0] = array[array.length -1];
        array[array.length -1] = tmp;
        console.log(array);
    })(b)

/* Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
    Input: 4 5
    Output: 20 */

    (function (a, b){
        var result = a * b;
        console.log(result) 
    })(4, 5)

/* Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
    Input: prograMming
    Output: progra**ing, 2 */
    
    (function (input){
        var output = ''
        for(var i = 0; i < input.length; i++){
            if(input[i] == 'm' || input[i] == 'M'){
                output += '*';
            }else{
                output += input[i];
            }
        }
        console.log(output); 
    })('prograMming')

/* Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com. 
Input: pera peric
    Output: pera.peric@gmail.com */
    
    (function (name, surname){
        console.log(name + '.' + surname + '@gmail.com');
    })('pera', 'peric')


/* Write a function that returns a function that calculates a decimal value of the given octal number. 
Input: 034
Output: 28 */ 

(function (number){
    
})