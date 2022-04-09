// Only change code below this line
function myCounter(n) {

    if(n<1) {
        return[];
    } else {
        const myRecursion = myCounter(n-1);
        myRecursion.unshift(n);
        return myRecursion;
    }
    }
// Only change code above this line

console.log(myRecursion((-1))); 
console.log(myRecursion((10))); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(myRecursion((5))); // [5, 4, 3, 2, 1]

module.exports = myCounter;