//Callbacks 
//JS ARRAY METHODS - forEach
//MAP - what it does how ot use it
//SOME and EVERY
//FILTER
// forEach won't be used as often becasue we have forOf
// for Of is easier to use now.



// CALLBACK FUNCTION TO EXECUTE EACH ELEMENT, TAKING THREEW ARGUMENTS:
//Syntax example... arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);

function holler() { // defining a function ... function decleratiion 
    console.log("Holler Back!");
}

const whisper = function () { // function expression 
    console.log("this is interesting") // a function can be stored in a variable
}

//PASSING FUNCTIONS AROUND TO OTHER FUNCTIONS

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function power(x, y) {
    return x ** y;
}



// WE CAN STORE FUNCTIONS IN AN ARRAY!

//TO RUN THIS FUNCTION IN A CONSOLE COUNT FROM 0 TO WHICH ARAY U WANT TO EXECUTE
//EXAMPLE divie is at index of 3 counting from 0 than run.. mathFuncs[3] (9,3) answer is 3!

//SET CALLBACK 
setTimeout(whisper, 4000); // this'll set callback "this is interesting" using timeout after 4000 mills seconds

//  how do we write our own functions doing this below is example!

//doMath(4, 2, subtract) 
//function doMath(a, b, mathFunc) {
//    mathFunc(a, b)
//    return subtract(4, 2) // this'll return a value 
//}

const mathFuncs = [add, subtract, multiply, divide, power];

function doMath(a, b, mathFuncs) {
    return mathFuncs(a, b);
}
// if you wrote doMath(4,5,add) using this function you should get 9! 

//write a annonymos function if we wanted to, as an example
doMath(3, 4, function (a, b) {
    console.log(a ** b) // this is 3 to the 4th power so it's 3 * 3 * 3 * 3 = 81
})

// 1 more example slightly more complicated of annonymos function
//Using math funcs array define function called doAllMath
//You'll need a for loop

function doAllMath(a, b, mathFuncs) {  // the array of all funcs "mathFuncs"
    for (let funcs of mathFuncs) {
        console.log(funcs(a, b))
    }
}

// forEach - an Array Method 
// pass in a function loops through the array
//Runs a callback function for each value in the array and then returns undefined
//forEach WILL ALWAYS RETURN UNDEFINED - NO MATTER WHAT!
// example below

let arr = [1, 2, 3];

arr.forEach(function (value, index, array) {
    console.log(value);
})
// you will get 1   2   3 ... on the console!

//example 2 

const colors = ['blue', 'green', 'yellow', 'red'];
colors.forEach(function (val, i) {  // this is accesing the value, index
    console.log(val.toUpperCase());
});

//^^this function is running 1 time forEach element,  that element is being passed because of ...forEach^^

// Example 3
//ADDING PRICES 
const prices = [30.95, 19.95, 2.50, 50.45];
let total = 0; // making the variable which is total
prices.forEach(function (price) {
    total += price;
});
console.log(total);

//For Of method could be used to do the exact same thing.
// Reason why we have forEach is because for Of didn't exist!!!
// for of is a newer JAVASCRIPT SYNTAX


//Using for of loop for same exact code! ^^
const price = [30.95, 19.95, 2.50, 50.45];  //had to rename to price becasue of prices already used abovfe
let ttl = 0;  // had to rename total cause of the function name above 
for (let price of prices) {
    ttl += price;
}
console.log(ttl); // this will give you exactly what the above code give you which is 103.85


//EXCERCISE BUILDING OUR OWN FOR EACH
//my version
let movies = ["Top Gun", "Mission Impossible", "Blood Diamonds"];
movies.forEach(function (value, i) {
    console.log(value.toUpperCase());
})



//COLTS STEELES VERSION
//Made funciton called for Each... than ran the array, and callback

//function forEach(arr, callback) {
//    for (let i = 0; i < arr.length; i++) {            //used a for loopping over array using a regualr for loop ... FOR LET...   
//        callback(arr(i));
//    }
//    return undefined;  //u can return undefined explicitly, BUT WHEN U CAll A FUNCTION THAT DOES NOT HAVE A RETURN VALUE YOU'LL GET UNDEFINED ANYWAY. 
//}

//forEach(movies, function (movie) {
//    console.log(movie.toLowercase())
//})

//THIS DIDN'T WORK FOR ME AT ALL!!! 
//NOR DID I UNDERSTAND HIS METHODS AS USUAL .. SMH


//MAP JS ARRAY METHODS
//Map takes a return value and creates a new array
//iterates trhough an array... RUNS  a callback function for each value in the array
// ADDS the result of that callback function to the new array 
// MAP ALWAYS RETURNS NEW ARRAY OF TEH SAME LENGTH as your original ARRAY..

//example...

let numbers = [1, 2, 3];

numbers.map(function (value, index, array) {
    return value * 10;
});

// [20,30,30]

const nums = [21, 37, 64, 80, 100];
const negatives = nums.map(function (num) {    //pass the callback functions // adding const and a function to save it will run the 
    // nothing changes when you run this until you save the function! MAP WON'T CHANGE THE ORIGINAL ARRAY
    return num * -1;
})

// remember nums is unchanged 
// negatives will run those numbers negative now !! ^^

const doubles = nums.map(function (num) { /// THIS ENTIRE FUNCTION IS MULTIPLYING * 2 PER ARRAY FROM ABOV E NUMBER 21, 37 , 64 * 2 for all.
    console.log(num * 2);
});
//IF YOU RUN DOUBLES IN THE CONSOLE YOU'LL GET AN ARRAY OF UNDEFINED... NOT WHAT WE WANT


// "A MORE COMPLICATED EXAMPLE... AS IF THIS ISN'T ALREADY COMPLICATED"
// USING MAP WOULD BE THE BEST FOR THIS..
// common usecase for using MAP
const todos = [
    {
        id: 1,
        text: "walk benny",
        priority: "HIGH"
    },
    {
        id: 2,
        text: "workout",
        priority: "medium"
    },
    {
        id: 3,
        text: "eact chocolate",
        priority: "low"
    },
    {
        id: 4,
        text: "walk benny again!",
        priority: "VERY HIGH"
    }
];

const toDoText = todos.map(function (todo) {  // THIS ISOLATES THE TEXTS FROM THE TODO'S ^^
    return todo.text
})

//USING DOM on new link href tags I just put into the HTML file
//USING MAP to see all 4 href in a string by selecing all anchor tags
//this is using DOM... selecting all "a" tags and CONST LINKS IS SAVING THE VARIABLE 
// this'll give us undefined 
// links is a node list not an array but we can turn it into an array using the bottom method called array.from
//links is an iterable

const links = Array.from(document.querySelectorAll('a')); // const saving the variable
const urls = links.map(function (a) {
    return a.href;
});

//this is using map in conjuction with things query selector
//map is a way of taking an array and mapping it in someway - 
//simple like multiplying dividing, mutiplying by - 1 etc... COLT IS CONFUSING not a great teacher.

//WRITING OUR OWN VERSION OF MAP
//pass an array 
//accepts the array - "arr" and callback

function myMap(arr, callback) {
    const mappedArray = [];  //saving a variable and start with empty array []
    for (let i = 0; i < arr.length; i++) { // loop over array
        const val = callback(arr[i], i, arr);
        mappedArray.push(val);
    }
    return mappedArray;
}

//WERE USING THE TODO WE MADE EARLIER IN THIS EXAMPLE
//THIS WILL RUN THE PRIORITY from each todo example HIGH, MEDIUM, LOW, VERY HIGH

const priorityMap = myMap(todos, function (todo) { // const saves it to a variable otherwise we lose it if we don't capture it
    return todo.priority;
})

//PART 2 WRITING A CALLBACK AS IT'S EXPECTING AN INDEX 2nd argument to be passed in.
//using repeat strings str.string

const repeatedStrings = myMap(["a", "b", "c", "d"], function (str, i) { //saving it with const again! 
    return str.repeat(i);
});
// REASON Y WE ARN'T GETTING A REPEAT ON A CAUSE THE STRING IS A 0 if you repeat 0 as many times as you want it'll always be 0 

//WHEN WOULD YOU USE MAP 
// YOU WANT TO "TRANSFORM" AN ARRAY INTO ANOTHER ARRAY OF THE SAME LENGTH
//you do no want to overwrite an existing array and instead return a new copy


// FILTER - Creates new array
// Loops through an array ... Runs a callback function on each value in the array... if callback function returns true value pushed to new array
// Otherwise value is not included
//EXAMPLE 
let letters = ['a', 'b', 'c', 'b', 'c'];
letters.filter(function (value, index, array) {
    return value === 'b';
});
// ['b', 'b'] should return this!

//example

const words = [
    'immuneolectrophoretically',
    'rotavator',
    'mathmatician',
    'psychotheropysessions',
    'cryptonic',
    'whatever',
    'theuniversalsolarsystem',
    'uncopywriteable'
];

const longWords = words.filter(function (word) {
    return word.length >= 20;
});
// if you write longWords on the console the longest words will pop up using this code we ran. 


//example of letters that start with the letter U or C

const cOrUwords = words.filter(function (w) { //'w' IS THE PERAMATER NAME FOR VALUE!!!!!
    return w[0] === 'u' || w[0] === 'c';
});

//example of words with no vowels  "a e i o u" words
const noVowels = words.filter(function (word) {

});


const containsVowel = function (word) { // this function calls "isvowel"
    for (let char of word) {
        if (isVowel(char)) return true;   // if this ever returns true than entire words contains a vowel
    }
    return false;  // if we go through entire loop to the end and there is no vowel
};
//on console-- if you run containsVowel("hello") you will get true
//if you run containsVowel("hll") you'll get false this is all correct!



const isVowel = function (char) {
    return 'aeiou'.indexOf(char) !== -1;   // make a string of the vowels ... aeiou
};

//Map and Filter!!
// SELECT ALL CHECKBOXES USING QUERY Selector
const allCheckedboxes = document.querySelectorAll('input[type="checkbox"]');

//done in multiple steps as shown
const checked = Array.from(allCheckedboxes).filter(function (box) {
    return box.checked;
});

const completedItems = checked.map(function (checkbox) {
    return checkbox.parentElement.innerText;
});


// You can chain all the above code in 1 which gives you the same outcome!
//example below!

function extractCompletedTodos() {
    const allCheckedboxes = document.querySelectorAll('input[type="checkbox"]');
    return Array.from(allCheckedboxes)
        .filter(function (box) {
            return box.checked;
        })
        .map(function (checkbox) {
            return checkbox.parentElement.innerText;
        });
}


//Write Filter
//Using words array example above on line 275
// Getting the shortest word out of array

function myFilter(arr, callback) {
    const filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

const shorties = myFilter(words, function (word) { // run shorties on console you'll get shortest words from the
    return word.length <= 10;
});

//based off the index of the words on line 275 we can try and do every other word

const everyOtherWord = myFilter(words, function (word, i) {
    return i % 2 === 0; //easiest way to check if something is equal to 0 is using the modulo method like here
});


// SOME AND EVERY
//iterates through an array ... RUNS A CALLBACK ON EACH VALUE IN THE ARRAY
// if the callback returns true for at least one single value, return true

//EXAMPLE
//THIS DIDN'T WORK FOR ME...
words.some(function (word) {
    return word.length > 25;
});


//EVERY - same as some but this time returns false if the callback returns false for any single value

words.every(function (w) {
    return w.length >= 5;
});


function allStrings(arr) {
    return arr.every(function (el) {
        return typeof el === "string"
    })
}

//using DOM
const btn = document.querySelector('button');
btn.addEventListener('click', function (e) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const allChecked = Array.from(checkboxes).every(function (checkbox) {
        return checkbox.checked;
    });
    if (!allChecked) alert("PLEASE AGREE TO EVERYTHING!")
});


//FIND
// iterates through an array... runs a callback on each value in the array 
// if callback returns true at any PointerEvent, return the value in the array that we're iterating over
// otherwise return undefined

const scores = [
    0, 0, 0, 0, 0, 0, 0, 44, 55, 70, 72, 74, 80, 82, 90, 91, 92, 95
];
scores.find(function (score) {
    return score > 75;
});

// find even score
scores.find(function (score) {
    return score % 2 === 0;
});

//REDUCE - TAKES AN ARRAY OF ELEMENTS AND ALLOWS US TO REDUCE THEM TO A SINGLE VALUE
// let find sum of all numbers without reduce

const saying = ["hello", "I", "love", "you"];
const result = saying.reduce(function (accum, nextWord) {
    console.log(accum, nextWord);
    return accum + nextWord;
});

//another result
// reducing finding min score
const midtermScores = [70, 88, 83, 95, 64, 54, 55];
const finalScores = [91, 82, 75, 76, 58, 61, 58];
const minScore = midtermScores.reduce(function (min, nextScore) {
    if (nextScore < min); {
        return nextScore;
    }
    return min;
})


//FINDING THE MIN FOR BOTH FINAL AND MIDTERM SCORES
const minOverallScore = finalScores.reduce(function (min, nextScore) {
    return nextScore < min ? nextScore : min;
}, midtermScores);