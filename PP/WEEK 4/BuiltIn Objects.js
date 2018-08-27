/* Write a function to convert a number from one base (radix) to another. 
Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;

'ff', 16, 8 -> 377  */

function convertBase(number, initialBase, changeBase) {
    if((initialBase && changeBase) < 2 || (initialBase && changeBase) > 36){
        return 'Base between 2 and 36';
    }

    var num = parseInt(number + '', initialBase);
    return num.toString(changeBase);
}

console.log(convertBase('ff', 16, 8));
console.log(convertBase(1000, 2, 8));

/* Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

    12345 -> 54321  */
    
function reverseNumber(number){
   number = number + '';
   return number.split('').reverse().join('');
}    

console.log(reverseNumber(54321));


/* Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Note: Assume punctuation, numbers and symbols are not included in the passed string.

“Webmaster” -> “abeemrstw”  */

function sortAlphabetOrder(word){
    return word.split('').sort().join('');
}

console.log(sortAlphabetOrder('webmaster'));

/* Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
	
    "Republic Of Serbia" -> "Rbceilpu Of Sabeir"  */
    
    function alphabetizeWords(string){
        var a = string.split(' ');
        for(var i = 0; i < a.length; i++){
           a[i] = a[i].split('').sort().join('');
        }
        return a.join(' ');
    }

    console.log(alphabetizeWords("Republic Of Serbia"));

/*  Write a function to split a string and convert it into an array of words.

    "John Snow" -> [ 'John', 'Snow' ]  */
    
    function splitString(string){
        return string.split(' ');
    }

    console.log(splitString('John Snow'));

/* Write a function to convert a string to its abbreviated form. 

    "John Snow" -> 	"John S."  */
    
    function convertString(string){
        var a =  string.split(' ');
        a[1] = a[1].substring(0, 1).split('');
        a[1].push('.');
        a[1] = a[1].join('');
        return a.join(' ');
    }

    console.log(convertString('John Snow'));

/* Write a function that can pad (left, right) a string to get to a determined length.

	'0000', 123, 'l' -> 0123 
'00000000', 123, 'r' -> 12300000  */

function formatedString(string, num, pad){
    if(pad == 'l'){
        return (string + num).slice(num.toString().length, (string + num).length );
    }else if(pad == 'r'){
        return (num + string).slice(0 , (num + string).length - num.toString().length);
    }
}

console.log(formatedString('00000000', 123, 'r'));

/* Write a function to capitalize the first letter of a string and returns modified string.

"js string exercises" -> "Js string exercises"  */

function firstLetterCapitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(firstLetterCapitalize('js string exercises'));

/* Write a function to hide email addresses to protect them from unauthorized users.

    "somerandomaddress@example.com" -> "somerand...@example.com"  */
    
function hideEmail(email){
    var splited = email.split('@');
    var email = splited[0];
    var emailDomain = splited[1];
    var avg = email.length /2;
    email = email.substring(0, (email.length - avg));
    return email + '...@' + emailDomain;
}

console.log(hideEmail('somerandomaddress@example.com'));

/* Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
       var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
       var LOWER = 'abcdefghijklmnopqrstuvwxyz';

"The Quick Brown Fox" -> "tHE qUICK bROWN fOX"  */

function replaceCase(string){
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    var result = [];

    for(var i = 0; i < string.length; i++){
        if(UPPER.indexOf(string[i]) == -1){
            result.push(string[i].toUpperCase());
        }else if(LOWER.indexOf(string[i]) == -1){
            result.push(string[i].toLowerCase());
        }
    }

    return result.join('');
}

console.log(replaceCase("The Quick Brown Fox"));
