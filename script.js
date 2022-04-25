        // N1
// let  user = {
//     firstname: 'giorgi',
//     lastname: 'smith',
//     age: 25,
//    studentstatus: active,
//   };
// console.log(user.studentstatus);


       //   N2


// let numbers = [2, 38, 34, 16]

// for (let index = 0; index < numbers.length; index++) {
//     console.log(numbers[index]);  
// }

// for (let index of numbers) {
//     console.log(index);
    
// }
// let x = 0;

// while (x<numbers.length) {
//     console.log(numbers[x]);
//     x++;
// }


          // N3
// let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

// for (let a of numbers) {
//     if (a>5) {
//         console.log(a);
//     }
    
    
// }

// for (let a = 0; a < numbers.length; a++) {
//     if (numbers[a]>5) {
//         console.log(numbers[a])
//     }
// }


    //    N4

// let user = {
//     name: 'giorgi',
//     age:  20,
//     studentstatus: 'active'
// }
// if (user.age<18 && user.studentstatus === 'active') {
//     console.log("hello");
// }
// else if (user.name === 'giorgi') {
//     console.log("hello giorgi")
// }
// else if (user.studentstatus === 'active' || user.age < 25) {
//     console.log("hello world")
// }
// else {
//     console.log("error")
// }

       // N5
    
// let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ] ;

// for (let b of array) {
//     if (typeof b === 'string' ) {
//         console.log(b)
//     }
// }
// for (let index = 0; index < array.length; index++) {
//     if (typeof array[index] === 'string' ) {
//         console.log(array[index])
//     }
    
// }

// N6

// let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]


// for (let c of array) {
//     for (let d of c) {
//         if (d>0) {
//            console.log(d); 
//         }
        
//     }
// }


// for (let index = 0; index < array.length; index++) {
//     for (let number = 0; number < array[index].length; number++) {
//         if (array[index][number] >0) {
//             console.log(array[index][number]);
//         }
        
//     }
    
// }





// 7

// let array = [32, 10, 'hello', null, 'hello2', 50 ]

// for (let k of array) {
//     if (typeof k == 'number' && k % 5 == 0) {
//         console.log(k);
//     }
    
// }

// for (let index = 0; index < array.length; index++) {
//     if (typeof array[index] == 'number'&& array[index] % 5 == 0) {
//         console.log(array[index]);
//     }
    
// }


// function N1

// function Sum(...args) {
//     let numberSum = 0;

    // for (let a of args) {
        
    //     if (a>0) {
    //         numberSum = numberSum + a
            
    //     }
        
    // }
    // for (let index = 0; index < args.length; index++) {
    //     if (args[index] > 0) {
    //         numberSum += args[index]
    //     }
        
    // }
    // return numberSum
// }
// let result = Sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8)
// console.log(result);

// function  N2

// let sum = function(...args){
//     let number = 0;
//     for (const a of args) {
//         number += a
//     }
//     return number


// }
// let result = sum(10, 50, 6, 7, 8, 11, 6, 3, 9)
// console.log(result);

// let sum = (...args) => {
//     let number = 0;
//     for (let a = 0; a < args.length; a++) {
//         number += args[a]
//     }
//     console.log(number);
// }
// sum(10, 50, 6, 7, 8, 11, 6, 3, 9);


// function N3

// let user = {
//     firstname: 'giorgi',
//     lastname: 'saakadze',
//     age: 32,
//     isloggedin: true
// }

// function userInfo(obj) {
//     if (obj.isloggedin) {
//         console.log(user.firstname + " " + obj.lastname);
//     }
//     else{
//         console.log(false);
//     }
// }
// userInfo(user);

// function N4

// function numbers(obj) {
//     let x = 0;

//     for (let a of obj) {
//         if (a>x) {
//             x = a
//         }
        
//     }
//     return x;
// }
  
// console.log(numbers([4, 7, 9, 51])); 


// function numb(...args) {
//     let x =0;
//     for (let a = 0; a<args.length; a++) {
//         if (args[a]>x) {
//             x = args[a]
//         }
//     }
//     console.log(x);
// }
// numb(456, 789, 3, 78);



