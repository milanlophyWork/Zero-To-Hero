'use strict';

        // Scope and scope chain

function calcAge(birthYear){ // Global scope as it is a top level code.

    const age = 2025 - birthYear // local to calcAge
    console.log(firstName) // firstName not in this calcAge's scope. But it is a global variable so on looking up the scope chain it finds it in global scope
    
    function printAge(){ // Can access parent scope and global scope
        let output = `${firstName}, you are ${age}, born in ${birthYear}` // age and birthYear accessed from parent calcAge's scope and firstName from global scope
        console.log(output)

        if(birthYear >= 1981 && birthYear <= 1996){ // this is a block scope
            var millenial = true

            // Creating a new variable with same name as outer scope's variable.
            // const firstName = 'Olivia' // If firstName in current scope itself no variable look up , js use this variable.
            
            // Reassinging outer scope variable 'output'
            output = 'New Output!' // Reassigning

            
            const str = `Oh, You  are a millenial, ${firstName}` // firstName from global scope
            console.log(str)

            function add(a, b){
                return a+b
            }


        } // millennial => born between 1981 and 1996
        
        // console.log(str) // Reference error : let and const are block scoped so cannot access outside block
        console.log(millenial) // var cannot be block scoped. It will be scoped to the nearest fn. Here var is in printAge's scope
        // console.log(add(2,3)) // Reference Error : fns are block scoped in strict mode. so add is also block scoped 
        console.log(output)

    } // printAge can access output (its own scope), age and birthYear from calcAge scope, firstName from global scope
    printAge()

    
    return age
}

const firstName = 'Milan' // global variable
// console.log(calcAge(1991)) // !!! check by uncommenting


        // Hoisting with Variables

// console.log(me) // !!! undefined // var is hoisted to an initial value of 'undefined'
// ***  console.log(job) // ReferenceError : cannot access before initialization // hoisted but job is at TDZ here.
// ***  console.log(birthYear)  // same error as above // hoisted but birthYear is also in TDZ

var me = 'Milan'
let job = 'teacher'
const birthYear = 2003

        // Hoisting with Functions

//console.log(addDecl(2,3)) // !!!

// *** console.log(addExp(2,3)) // ReferenceError : Cannot access addExp before initialization
// *** console.log(addArr(2,3)) // ReferenceError : Cannot access addArr before initialization
// *** console.log(addVar(2,3)) // Uncaught TypeError : addVar is not a function // because var allows hoisting initialized as undefined so we actually calls undefined which is not a fn

function addDecl(a,b){
    return a+b
}

const addExp = function(a,b){ // Its const variable so in TDZ
    return a+b
}

const addArr = (a,b)=> a+b
var addVar = (a,b) => a+b

        // Example

// if(!numProducts) deleteShoppingCart() // !!! we get all products deleted even if numProducts has 10. because it is hoisted with undefined (falsy value)

var numProducts = 10

function deleteShoppingCart(){
    console.log('All products deleted')
}
// So don't use var . Use let, const instead. And always declare all your fns first and use them only after declaration

var x = 1
let y = 2
const z = 3

// console.log(x === window.x) // !!!
// console.log(y === window.y) // !!!
// console.log(z === window.z) // !!!

// Check window obj in console. Window is the global obj of js in browser. Variables created by let and const do not create properties on window obj. But var does.

/*
    This keyword

    Special variable that is created for every execution context (every fn). The this keyword will always take the value of the owner of the 
    fn in which the this keyword is used. ie it points to owner of the fn.

    this is not static (not always same). It depends on how the fn is called and its value is only assigned when the fn is actually called.

    fn calling ways ::
    
    1. fn as method : The this keyword inside method point to the object on which the method is called 
    2. Simple fn call : this keyword is undefined in strict mode. Otherwise 'this' points to global object (window obj in case of browser). Always use strict mode.  
    3. Arrow fns : this keyword will simply be the this keyword of surrounding fn ( ie parent fn). It is called lexical this keyword . Arrow fns do not have their own this.
    4. fn called as eventListener : this points to the DOM element that the handler fn is attached to.
    5. new (points to new obj created), 
       call (points to first argument of call), 
       apply (points to first arg , but arg passed as array),
       bind (points permanently to the obj passed as arg): 

    this keyword will not point to the function itself and not to its variable env of the fn.
*/

// console.log('from outside fn :',this) // !!! this outside fn points to window obj

const calcAge1 = function(birthYear){ // this inside regular fn(means fn without obj attached) points to undefined as we are in strict mode. Otherwise points to global obj.
    console.log(2025-birthYear)
    console.log('from reg fn : ',this)
}
// calcAge1(1970) // !!!
 
const calcAgeArr = birthYear => {
    console.log(2025 - birthYear)
    console.log('from arrow fn :',this) // this points to parent fn's this. Here parent fn is global scope that points to window. so arrow fn also points to window.
}
// calcAgeArr(1971) // !!!

const heaven = {
  
    year : 2011,
    calcAge2 : function(){
        console.log('from method : ',this) // this point to heaven obj because method calcAge() is called on heaven obj. this => heaven, this.year => heaven.year, etc
        console.log(2025 - this.year)
    }
}
// heaven.calcAge2() // !!!

const helan = {
    year : 2005
}
helan.calcAge3 = heaven.calcAge2 // method borrowing // copying method from heaven obj to helan obj 
// console.log(helan) // !!!
// helan.calcAge3() // !!! this points to obj helan as method is called from helan object (even though method is written in heaven object).

const fn = heaven.calcAge2
// fn() // !!! this will be undefined because fn is a regular fn. year is not defined so returns year

    // Regular fns Vs arrow fns

// var firstName2 = 'Matilda'

const milan = {
    firstName2 : 'Milan',
    year : 2003,
    calcAge4 : function(){
        console.log(this)
        console.log(2025-this.year)
    },

    greet : ()=> console.log(`Hey, ${this.firstName2}`) // use its parent's this keyword. Parent is global scope that points to window. But window obj doesn't have firstName. Instead of error we get undefined.

}// So best practise is that never ever use an arrow fn as a method.

// milan.greet() // !!! We get undefined because whenever we try to access a property that doesn't exist on an obj, we do not get an error but get undefined.
// console.log(window.firstName2) // !!! But on declaring firstName2 with var which create properties in window obj, so this points to matilda

// milan.calcAge4() // !!!

const jonas = {
    firstName : 'Jonas',
    year : 1991,
    calcAge5 : function(){
        console.log(this)
        console.log(2025 - this.year)

        const self = this // self or called as that
        const isMillennial = function(){
            // console.log(this.year >= 1981 && this.year <= 1996)// TypeError: Cannot read property year. Because millennial is called as a regular fn (without any obj). So in strict mode 'this' points to undefined. Has 2 solutions:

            console.log(self.year >= 1981 && self.year <= 1996) // 1. Use self that store this from outer context 
        } 
        // isMillennial() // !!!

        const isMillenial2 = ()=> console.log(this.year >= 1981 && this.year <= 1996) // 2. Use arrow fn : as it points to parent's this
        isMillenial2()
    }
}
// jonas.calcAge5() // !!!

// Arguments keyword

const addExp2 = function (a,b){
    console.log(arguments)  // Execution context has arguments obj (with all arguments passed) inside the variable env for fn declarations and fn expressions
    return a+b
}
// addExp2(2,4) // !!!
// addExp2(2,4,6,8) // !!! Even though 2 arguments are needed We can use rest of the arguments as they will be stored inside arguments object

var addArr2 = (a,b) => {
    // console.log(arguments) // ReferenceError  Arrow fns cannot get arguments object and this keyword
    console.log(a+b)
}
// addArr2(3,5) // !!!

        // Memory MAnagement : Primitives Vs Objects

/*
    Memory management is about how js engine allocate space in memory for creating variables and later frees up that memory space. Memory is
    automatically managed by js behind the scenes. Every value we create in js goes through a memory lifecycle. In this lifecycle, first a piece 
    of memory is allocated whenever a new value is created.

    The allocated memory is used whenever the stored value is being accessed (ie to write, read or update) while running the code. At the end of
    value's lifecycle the memory it occupies gets released. ie The value is deleted from memory when the value is not needed anymore. The freed up memory 
    can be used for new future values.

    Memory allocation

    For different types of values memory is allocated in different places in js engine. Values can be primitive (number, string, boolean, undefined, null, symbol, BigInt) 
    or objects (object literals, arrays, fns, ...). Js engine has 2 main components, 1. callstack where fns are executed 2. heap where objects are stored in m/y.

    ie All objects are allocated in memory heap and all primitives are stored in callstack. In detail, primitives are stored in execution ctxt in which they are created.
    There may be some exceptions that they might store an extremely long string which is a primitive inside heap.

    Besides primitives, references to objects are also stored in callstack. references are memory address of objects in heap.
*/

    // Practising Object references (Shallow vs Deep copies)

const jessica = { // stored in heap and callstack will hold a reference to jessica obj 
    firstName : 'Jessica',
    lastName : 'Williams',
    age : 27
}

const marriedJessica = jessica // Both refer to same object in memory heap. No new obj 'marriedJessica' is created but marriedJessica points to jessica obj in heap. 

marriedJessica.lastName = 'Davis' // changing property of object with const variable is allowed as we are not changing the reference that is stored inside the jessica constant.
//  This only changes value in property of obj in heap. const is assigned reference only so no change occurs to value in const.

// marriedJessica = 8 // This not allowed as reassigning value to const variable. Changes m/y address or reference stored inside jessica constant. As it will get a new reference / memory address 

// console.log('Before: ', jessica) // !!!
// console.log('After: ',marriedJessica) // !!! Both changed as both has same refernce pointing same obj. So change done by one get reflected in both as both points to same obj. 

function marryPerson(originalPerson, newLastName){
    originalPerson.lastName = newLastName
    return originalPerson 
}

// const marriedJessica2 = marryPerson(jessica, 'Davis') // !!! Fns stored in heap. jessica is passed => only reference of address of jessica is passed. So on modifying lastName original jessica is modified. const marriedJessica2 holds reference to jessica obj in heap as it is returned.

// console.log('Before', jessica) // !!! gives modified data
// console.log('After',marriedJessica2) // !!! gives modified data

        // Spread Operator (...) // Suppose we want exact copy of obj that won't affect original on updation

const jessica2 = {
    firstName : 'Jessica',
    lastName : 'Williams',
    age : 27,
    family : ['Alice', 'Bob']
}

    // Shallow Copy
const jessica2Copy = {...jessica2} // curly braces create a new obj and put all values of jessica2 in jessica2Copy. This new obj is stored in heap and reference stored to jessica2Copy
jessica2Copy.lastName = 'Davis'

// console.log('Before',jessica2) // !!!
// console.log('After',jessica2Copy) // !!! Original is not affected

jessica2Copy.family.push('Mary') // Problem with spread operator
// jessica2Copy.family.push('John')

// console.log('Before',jessica2) // !!! Both get affected on pushing values to family array
// console.log('After',jessica2Copy) // !!! Because arrays are also objects. family array is stored inside heap and family on both jessica2 and its copy just holds the reference. Hence on pushing, array in heap is modified.

// We say that only first level is copied ie till primitive (till age). This is called shallow copy.

    // Deep Copy / deep clone

const jessica2Clone = structuredClone(jessica2) // Deep cloning // Before we wanna use lodash to do the same which is a little bit difficult 

jessica2Clone.family.push('Catherine')
jessica2Clone.family.push('Stefi')

// console.log('Original', jessica2) // !!! With deep clone original not affected
// console.log('Clone : ',jessica2Clone) // !!!

    // Memory Management : Garbage collection

/* In memory lifecycle value is being allocated memory then the memory is used on accessing it and then memory is released after usage of variable. Releasing memory 
    
    Since these values are stored in stack and heap we need to analyze both these storage mechanisms. In callstack it is simple as variable env is simply deleted when Execution ctxt is popped off. But global variables in Global EC 
    will never be deleted while env is running. Because global EC remains active until page unloads or script ends. Once page or script ends global memory can be garbage collected.

    To delete old unused objects from heap and free up memory JS engine uses a process cld garbage collection (central memory management tool). It is js engine that runs garbage collection automatically. Modern js use mark and sweep alg
    for garbage collection. 
    
    1st part , Mark => Mark all objects that are reachable from a root as alive. Roots are starting points from which alg starts to look for alive or reachable objects.
     
    Basically roots are the exec ctxts. objects in exec ctxts (ref points to obj in heap that obj is meant here let 'a') are considered alive as they can be reached out from root. Suppose this object 'a' in heap is pointing to another obj 'b' in heap. 
    Then obj 'b' is also alive because 'b' can be reached out from reachable obj 'a'. Active event listeners , active timers and closures can also be root. The objects pointed by these are also alive.

    Now consider an obj 'c' in heap not referenced by anything then obj 'c' is not alive.

    2nd part , Sweep => Delete unmarked (unreachable) objects and reclaim memory for future allocations. So 'c' is deleted.
     
    When Exec ctxt is popped objects in heap no longer have reference, so they will be marked as not alive in phase1 and deleted in phase2. ie now 'a' lost reference from exec ctxt as it is popped. So no root element for a and b. So a and b are deleted.

    GEC is not deleted until page or script ends. So objects inside it are never deleted during execution even if not needed. Once page ends they are garbage collected.

    Memory Leaks : When objects that are no longer needed are incorrectly still reachable, and therefore not being garbage collected leads to memory leaks. Memory leaks occurs only during execution of script or application. In Js this happens 
    when an object is still incorrectly referenced from somewhere. One source of these wrong and unreachable references are old, unnecessary eventListeners and timers. 
        
    For example, a timer creates an obj. This obj will be reachable unless the developer actively deletes the timer when they no longer need it. Otherwise it will forever reference the unnecessary obj causing a memory leak. So to avoid memory 
    leaks make sure to always deactivate timers and eventListeners when they are no longer required especially larger objects. Also avoid declaring large obj as global objects becaause they will also never be garbage collected.

*/