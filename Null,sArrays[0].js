///used for storing data is a foundational concept///

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn Kubernetes'];

///arrays make javascript lists

///stores any type off information/ any data type 

/// to make an an array directly define its values 

///every value is divided by a coma

/// ' example ,element' , 10, true 
const hobbies = [' Skateboarding', 'Read more', 'playing videogames'];

console.log(hobbies)


///each element has an array with a numbered positon. starting from 0 ,rather than one. 0 is the first item

let li = hobbies [2]
console.log(2)

let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

seasons[3] = 'Autumn';

console.log(seasons);

newYearsResolutions [0] = 'Start drawing'
console.log()

//in a Array with let and const variable can be changed, elements with const remain mutable, can change the conents cant reassign a new array

let condiments = ['Ketchup', 'Mustard', 'Relish'];

condiments [0] = ['Mayo'];
console.log;

const utensils = ['fork', 'spoon', 'knife'];

//.legnth returns th number of items in the array access .length just like strings 

const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];
console.log(newYearsResolutions.length);
console.log(newYearsResolutions[newYearsResolutions.length -1])

//dot notation used in length when we want to know ho many elements are in a array we access the .length property

console.log(condiments.length);

// there are many methods that make arrays easier to work with .push() is one of them. These methods are specifically called on arrays to make common tasks, like adding and removing elements, more straightforward.
 
const itemTracker = ['item 0', 'item 1', 'item 2'];
itemTracker.push('item 3', 'item 4');
console.log(itemTracker);
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

//.push() uses dot method. its called then like a function. .push() can take a single argument or multiple and seperate them with commas. Notice that push() changes or mutates itemtracker.

const chores = ['laundry', 'dishes', 'walk the dog'];
chores.push('clean the mirror', 'mop');
console.log(chores);

//the .pop() method removes the final item of our array. 



//Another array method, .pop(), removes the last item of an array:
const newItemTracker = ['item 0', 'item 1', 'item 2'];
const removed = newItemTracker.pop();

console.log(newItemTracker);
// Output: [ 'item 0', 'item 1' ]

console.log(removed);
// Output: item 2




// in this example calling .pop on the item tracker removed the second item from the array 

// .pop doesn't take arguments. it returns the value of the last element. you need to mutate ab array by remove the last element use .pop()

