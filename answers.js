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