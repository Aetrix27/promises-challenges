/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the `greetAndUppercase` function. This function uses
 *    Async/Await. How is this function different than a regular (non-async)
 *    function? What is its return type?
 * 
 *  Async/Await functions perform tasks while the program is running and return Promises
 *  after awaiting until a Promise is settled whereas non async functions performs tasks 
 *  all at one time. Async functions return a result rather than a Promise.
 *  
 * 2. Uncomment block #1 and run the code using `node challenge3.js`. What is
 *    printed when we use `greetAndUppercase` like a regular function?
 * 
 * Promise { <pending> } is what is printed, and nothing else occurs. This is since 
 * the promise has not been resolved, and has not been returned as a new Promise.
 * 
 * 3. Uncomment block #2 and run the code again. What happens now?
 * 
 * It prints out the message HELLO THERE, DUCKY, since it runs the greet then
 * uppercase function.
 * 
 * 4. Write an asynchronous method 'spacer' that takes a string as input and 
 *    returns the input string with a space added between each character. You 
 *    can use your solution from Part 3.
 * 
 *    Call 'spacer' in the `greetAndUppercase` method and run your code again.
 *    You should see something like:
 * 
 *    'H E L L O   T H E R E ,   D U C K Y'
 * 
 * 
 *******************************************************************************
 */


 /**
  * Asynchronously returns a greeting for a specified name.
  * @param name The name of the person to greet.
  */
 function greet(name) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (typeof name === 'string') { 
          resolve('Hello there, ' + name);
        } else {
          reject('Name must be a string!');
        }
      }, 500);
    });
}

/**
 * Returns the uppercased version of a string.
 * @param {*} str The string to uppercase.
 */
function uppercaser(str) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
        if (typeof str === 'string') {
            resolve(str.toUpperCase());
        } else {
            reject('Argument to uppercaser must be string');
        }
        }, 500);
    });
}

async function greetAndUppercase(name) {
    greeting = await greet(name)
    uppercasedGreeting = await uppercaser(greeting)
    spacedString = await spacer(uppercasedGreeting)
    return spacedString
}

result = greetAndUppercase('Ducky')
console.log(result)

 greetAndUppercase('Ducky')
     .then(function(result) {
         console.log(result)
     })
     .catch(function(err) {
         console.log(err)
     })

async function spacer(str){
return new Promise(function(resolve, reject) {
  setTimeout(function(){
    if(typeof str === 'string'){
      let spacedStr = ''
      for (let char = 0; char < str.length; char++){
        spacedStr += `${str[char]}`;
        spacedStr += ' '
      }

      resolve(spacedStr);

    }else{
      reject("The word must be a string")
    }
  
  }, 1000);
});
}
    
    