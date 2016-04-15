/*
Exercise 1

Write a function called printPositives that takes an array and uses its forEach method to print only the positive numbers.
*/

var newArr = []

function printPositives(arr) {

    arr.forEach(retPos);
    return newArr;
}

function retPos(num) {
    if (num >= 0) {
        newArr.push(num);
    }

}


var x = [-5, -67, -55, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -333];
//console.log(printPositives(x));

//console.log(retPos(2));

/*
Exercise 2

Similar to the previous exercise, write a function called getPositives that takes an array and uses its filter method to return a new array with only the positive numbers
*/

function getPositives(arr) {

    return arr.filter(retPositives);
}

function retPositives(num) {
    return num >= 0;
}

//console.log(getPositives(x));



/*
Exercise 3

Write a function called filterArray that takes an array AND a function as arguments. 

Your filter function should return a new array that contains only the elements where the passed function returns a truthy value.

NOTE: You are allowed to use Array.prototype.filter to answer this question.

NOTE 2: This is a bit of a trick question, the answer is a one-liner :)
*/

//var newArr2 = [];

function filterArray(arr, fnct) {

    return arr.filter(fnct);
}

function truthy(val) {
    if (val) {
        return val;
    }
}

var arrx = [2, 3, -1, "", "ksdjflsjd", false, 0];
//console.log(filterArray(arrx,truthy));


/*
Exercise 4

Write a function called longestWord that takes a string as argument, and returns the longest word in the string. You should use Array.prototype.reduce to do your work.

Hint: You can use String.prototype.split to split the string into an array of words.
*/

function longestWord(str) {

    var arr = str.split(" ");
    return arr.reduce(findLongest, "");
    //return arr;
}

function findLongest(prev, curr) {
    if (curr.length >= prev.length) {
        return curr;
    }
    return curr;
}

var a = "I am not impressed with your performance";

//console.log(longestWord(a));

/*
Exercise 5

Write a function called countVowels that takes a string and returns the number of vowels in the string. You should use Array.prototype.reduce to do your work.

Hint: You can use String.prototype.split again. There is a way to use it to split a string by character. Try to Google it :)

Hint 2: You can create an array of vowels and use Array.prototype.indexOf to check if the current letter is a vowel.
*/

function countVowels(str) {

    var arry = str.split("");
    return arry.reduce(isVowel, 0);
}

function isVowel(prev, curr) {

    if (["a", "e", "i", "o", "u"].indexOf(curr.toLowerCase()) > -1) {
        return prev + 1;
    }
    return prev;
}

//var q = "I know what you did last summer";
//console.log(countVowels(q));

/*
Exercise 6

Write a function called highLow that takes an array of numbers, and returns an object with a property highest containing the highest number, and a property lowest containing the lowest number, using Array.prototype.reduce.

For example, starting with [1, -10, 20, 40, 5], your function should return {highest: 40, lowest: -10}.

Hint: Javascript has a special value called Infinity, which is higher than any other number. See if you can initialize your reduce accumulator with Infinity and -Infinity :)


*/

function highLow(arr) {

    var obj = {
        highest: -Infinity,
        lowest: Infinity
    };

    return arr.reduce(findHighestAndLowest, {
        highest: -Infinity,
        lowest: Infinity
    });


}

function findHighestAndLowest(prev, curr) {

    if (curr >= prev.highest) {
        prev.highest = curr;
    }
    if (curr <= prev.lowest) {
        prev.lowest = curr;
    }
    return prev;
}




//console.log(highLow(numArr));

/*
Exercise 7

Expanding on exercise 6, write a function called highLowTwo that takes an array of numbers, and returns the higest, second highest, lowest, and second lowest numbers.

For example, starting with [1, -10, 20, 40, 5], your function should return:

{
  "highest": 40,
  "secondHighest": 20,
  "lowest": -10,
  "secondLowest": 5
}
*/

function highLowTwo(arr) {

        var obj = {
        highest: -Infinity,
        secondHighest: -Infinity,
        lowest: Infinity,
        secondLowest : Infinity
    };

    return arr.reduce(findHighTwolowTwo, {
        highest: -Infinity,
        secondHighest: -Infinity,
        lowest: Infinity,
        secondLowest : Infinity
    });

}

function findHighTwolowTwo (prev,curr) {
    
    if (curr > prev.highest) {
        prev.secondHighest = prev.highest
        prev.highest = curr;
    }
    else if (curr > prev.secondHighest) {
        prev.secondHighest = curr;
    }
    
    if (curr < prev.lowest) {
        prev.secondLowest = prev.lowest;
        prev.lowest = curr;
    }
    else if (curr < prev.secondLowest) {
        prev.secondLowest = curr;
    }
    return prev;
}

var numArr = [1, -10, 20, 40, 5];
console.log(highLowTwo(numArr));