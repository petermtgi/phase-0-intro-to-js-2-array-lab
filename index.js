// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

// function to destructively append a cat
function destructivelyAppendCat(name) {
    cats.push(name);
}

// function to destructively prepend a cat
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// function to destructively remove the last cat
function destructivelyRemoveLastCat() {
    cats.pop();
}

// function to destructively remove the first cat
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Function to append a cat without modifying the original array
function appendCat(name) {
    return [...cats, name];
  }

// Function to prepend a cat without modifying the original array
function prependCat(name) {
    return [name, ...cats];
  }

// Function to remove the last cat without modifying the original array
function removeLastCat() {
    return cats.slice(0, -1);
}

// Function to remove the first cat without modifying the original array
function removeFirstCat() {
    return cats.slice(1);
}

