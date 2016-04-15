/*
Exercise 1

Write a function called printPositives that takes an array and uses its forEach method to print only the positive numbers.
*/

var newArr = []

function printPositives (arr) {
    
    arr.forEach(retPos);
    return newArr;
}

function retPos (num) {
    if(num >= 0) {
        newArr.push(num);
    }

}


var x = [-5,-67,-55,1,2,3,4,5,6,7,8,9,10,-333];
//console.log(printPositives(x));

//console.log(retPos(2));

/*
Exercise 2

Similar to the previous exercise, write a function called getPositives that takes an array and uses its filter method to return a new array with only the positive numbers
*/

function getPositives (arr) {
    
    return arr.filter(retPositives);
}

function retPositives (num) {
    return num >= 0;
}

//console.log(getPositives(x));