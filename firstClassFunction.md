<!-- first class and second class function in javascript -->

A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.
A first-class citizen (also type, object, entity, or value) in a given programming language is an entity which supports all the operations generally available to other entities. These operations typically include being passed as an argument, returned from a function, modified, and assigned to a variable

example: const illustrateExample = function() {
   console.log("foobar");
}
// Invoke it using the variable
illustrateExample();

Second class function can only be passed as prameters but cannot be assigned to a variable.