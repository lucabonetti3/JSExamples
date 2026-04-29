

//--------FUNCTION-------------
function prova(testo){
    return "prova fatta"+testo;
}

//  ----------ARROW FUNCTION

// Traditional anonymous function
(function (a) {
  return a + 100;
});

// 1. Remove the word "function" and place arrow between the argument and opening body brace
(a) => {
  return a + 100;
};

// 2. Remove the body braces and word "return" — the return is implied.
(a) => a + 100;

// 3. Remove the parameter parentheses
let x = a => a + 100;

console.log(x(3));

let double = x => x * 2;
let isEven = n => n % 2 === 0;

console.log(double(3));
console.log(isEven(3));

