function findFactorial(number){
    let factorial = 1;
    for(let i = 1; i <= number; i++){
        factorial *= i;
    }
    return factorial;
}
function removeDuplicates(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        // Check if newArray does not include the current element
        if (!newArray.includes(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
function mergeArraysnoDuplicates(array_1, array_2) {   
    let newArray = [];

    // Merge elements from array_1 to newArray
    for (let i = 0; i < array_1.length; i++) {
        if (!newArray.includes(array_1[i])) {
            newArray.push(array_1[i]);
        }
    }

    // Merge elements from array_2 to newArray
    for (let i = 0; i < array_2.length; i++) {
        if (!newArray.includes(array_2[i])) {
            newArray.push(array_2[i]);
        }
    }

    return newArray;
}

let pip1=0;
let pip2=1;
let count =0;

function matchrandom (){
    pip1 = Math.round(Math.random() *5 +1);
    pip2 = Math.round(Math.random() *5 +1);
}
while (pip1 != pip2){
    matchrandom();
    count++; // count how many round 
}
console.log("they are matching now.");

let n = 5;
let product=1;
for (let i = 1; i <=5; i++){

    product *=i;
}
console.log(product);

let newArray = [3,4,5,6,7,8,9];

for (let i = 0; i < newArray.length; i++){
    let isPrime = true;
    for (let j=2; j<=Math.sqrt(newArray[i]); j++){
        if (newArray[i]%j === 0){
            isPrime = false;
            break;
        }
    }
    if (isPrime){
        console.log(newArray[i] + "is a Prime number\n");
    }
}
let n1 = [];
let numb = 500;
for (let i = 0; i <= numb; i++){
    if (i === 0){
        n1[i] = 0;
    } else if (i === 1){
        n1[i] = 1;
    } else{
        n1[i] = n1[i-1] + n1[i-2];
    }
}
console.log(n1);

let checkstring = 22442;
checkstring = checkstring.toString();
let flag = false;
for (let i = 0; i <= checkstring.length/2; i++){
    if (checkstring[i] !== checkstring[checkstring.length-1-i]){
        flag = false;
        break;
    } else{
        flag = true;
    }
}
if(flag){
    console.log("this string is a Palindrome ");
}else{
    console.log("this string is not a Palindrome ");
}

let arraya = [1,2,3];
let arrayb = [3,4,5];
let arrayc = [];

