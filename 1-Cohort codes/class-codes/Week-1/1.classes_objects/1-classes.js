class Animal {
    // The constructor is used to initialize the properties of the object
    constructor(name, legCount, speaks) {
        this.name = name; 
        this.legCount = legCount; 
        this.speaks = speaks; 
    }

    // Instance method: This method is tied to a specific object (instance) of the Animal class
    speak() {
        console.log(`${this.name} makes a noise: ${this.speaks}`);
    }

    // Static method: This method is not tied to any specific object 
    //You can call it directly on the class without creating an object
    static myType() {
        console.log("Hi, this is a static function.");
    }
}

// Creating instances (objects) of the Animal class
let dog = new Animal("dog", 4, "bhow-bhow"); 
let cat = new Animal("cat", 4, "meow-meow"); 

// Calling the speak() method on the cat object
// This works because speak() is an instance method and cat is an instance of Animal
cat.speak(); // Output: cat makes a noise: meow-meow

// Calling the speak() method on the Animal class directly would give an error
// Animal.speak(); // Error: Uncaught TypeError: Animal.speak is not a function

// To fix this, you must use an instance (like 'cat' or 'dog') to call speak(), as shown above

// Calling the static method directly on the class
Animal.myType(); // Output: Hi, this is a static function.

// Static methods don't need an instance of the class (like cat or dog) to be called
// This is why Animal.myType() works directly, but Animal.speak() does not.


