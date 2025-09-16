/* 
    An overview of JS

    JavaScript is a high level, prototype based object oriented, multi paradigm, interpreted or just in time compiled, dynamic, single-threaded,
    garbage collected programming language with first class fns and a non-blocking event loop concurrency model.

    Every program runs in our computer needs some hardware resources such as memory and cpu to do its work. In low-level languages such as C, we need 
    to manually manage these resources. For eg: asking the computer for memory to create a new variable. High level languages like JS and python we do 
    not have to manage resources at all. But programs will never be as fast as C. 

    Garbage collection is one of the tools that takes memory management away from us. It is algorithm inside JS engine that automatically removes old, 
    unused objects from computer memory.

    Js is an interpreted language (line by line execution) or just in time compiled (ie interprets first then compiles frequently used codes) language. Computer's processor only understands zero's and one's ie machine code. Interpreter
    or compiler convert human-readable code to machine code. In Js this happens inside JS engine.

    Js is a multi-paradigm language. A paradigm is an approach  and mindset of structuring code which will direct your coding style and technique. 3 
    popular paradigms are procedural programming, object oriented programming and fnal programming. Procedural pgmming is just orgamizing the code in 
    a linear way with functions used in between. 

    paradigms can be imperative and declarative. Many languages are only procedural, or only object oriented or only fnal programming. But JS does all
    of it. We can use whatever paradigm we want. 

    Js is prototype based object oriented approach. Almost everything in js is an object except for primitive values such as numbers, strings, etc. But 
    arrays are object. It's because of the prototypal inheritance we could use push method on arrays. We create arrays from an array blueprint which is
    like a template and this is called prototype. This prototype contains all array methods. The arrays we create then inherit the methods from the 
    blueprint.

    Js is a language with first class functions. Functions are treated as variables. We can pass them into other functions and return them from fns. 
    This allows for fnal programming.

    Js is a dynamic language. Dynamic means dynamically typed. In js we don't assign data types to variables. They became known when js engine 
    executes our code. The type of variables can easily be changed as we reassign variables.

    ***Js with types (for variables) is called typeScript.

    Concurrency model is about how the js engine handles multiple tasks happening at the same time. Js runs on single thread so it can only do one thing
    at a time. The thread is where our code is actually executed in a machine's processor. Event loop handle long running tasks executes them in 
    background and puts them back in main thread once they are finished. Hence avoids blocking of single threaded Js. 

    Js Engine and Runtime

    Js engine is a computer program that executes the js code. V8 is the js engine of google chrome, nodeJs. Any js engine contains a call stack and a heap.
    Callstack is where our code is actually executed using something called execution context. Heap is an unstructured memory pool which stores all the 
    objects that our application needs. 

    In compilation, entire source code is converted to machine code at once. Then this m/c code is written into a binary file that can be executed by
    a computer. 
                    src code --compilation--> portable file : m/c code --execution--> Pgm running
    
    In interpretation, interpreter runs through the source code and executes it line by line.
                    src code --Execution line by line--> Pgm running

    Js used to be interpreted language. The problem with interpreted language is that they are slower than compiled languages. Modern js engine now use 
    a mix between compilation and interpretation which is cld just in time compilation. It compiles the entire code into m/c code at once, then executed
    immediately.
                    src code --compilation--> m/c code --execution--> Pgm running

    There is no portable file to execute. Execution happens immediately after compilation. 

    code -> parsing --(AST)--> Compilation --(m/c code)--> Execution (happens inside callstack)
                                                  ↑             ↑ 
                                                  Optimization  ⤴
    The code is parsed into a data structure called Abstract syntax tree. ie splits up each line of code into meaningful pieces and save into tree in a 
    structured way. During execution the code is being optimized and recompiled during the already running pgm execution.

    Js runtime is like a big container that includes all the things that we need to use js. Heart of js runtime is js engine. To work properly, we also
    need access to  web APIs. Web APIs are functionalities provided to the engine, accessible on window object. Eg: DOM, Timers, Fetch API. Js get access
    to these web APIs through global window object. Web APIs are also part of runtime.
    
    Js runtime also includes a callback queue. This is a data sturcture that contains all callback fns that are ready to be executed. Event handler fns 
    inside eventlisteners are also called callback fns. When event occurs callback fn(event handler) is put into callback queue. Event loop checks if 
    callstack is empty, if it does event loop passes cb fn to callstack and is then executed. 

    Execution Context and callstack

       Parsing -> compilation --(m/c code)--> Execution => GEC created for top level code -> top level code executed -> Execute fns and callbacks 
    
        The machine code after compilation is executed then. A global execution context is created for the top level code (code that is not inside any function). 
    Execution context is an environment in which a piece of javaScript is executed. Stores all the necessary info for some code to be executed. 

    In any js project, there is only one global execution context.

    Inside execution context there is variable environment , Scope chain and this keyword (These 3 are created in the creation phase).
    
    Variable env has let, const, var declarations, Fns and arguments object. Arguments obj contains all arguments that were passed into the fn that the current 
    execution content belongs to. Fns can also access variables outside of the fn. This is due to scope chain. 
    
    Scope chain basically consists of references to variables that are located outside of the current function. And to keep track of the scope chain,
    it is stored in each execution context. Each context (1 gec only, ctxt means for each fn , cb has their own ctxt which is pushed to gec for execution) 
    also gets a special variable called the this keyword.

    Execution ctxt belonging to arrow fns do not get their own arguments object and this keyword. Instead they can use arguments obj and this keyword from their
    closest regular fn parent.

    Call stack is the place where execution ctxts get stacked on top of each other to keep track of where we are in the execution.

    Scope and Scope chain

    Scoping controls how our pgm 's variables are organized and accessed by the Js engine. Lexical scoping means that the way variables are organized and accessed
    is controlled byt he placement of functions and blocks in the code. For example, a fn inside another fn has access to variables of parent fn.

    Scope is the space or env where a variable is declared (variable env stored in fn exec ctxt in case of fns). There is global scope, fn scope and block 
    scope. Scope of a variable is the region of our code where a variable can be accessed.
    
    Global scope - variables declared outside any fn or block. Variables declared in global scope are accessible everywhere.
    Fn scope - each and every fn creates a scope. Variables declared inside that fn scope are only accessible inside that fn. This is also cld local scope.
    Block scope - Traditionally only fns create scope. But starting from ES6 blocks also create scope. Blocks means everything in between curly braces.
      Variables declared inside a block are only accessible inside that block. Block scope only applies to variables declared with let or const. ie let and const 
      varables are block scoped. Fns are also block scoped (but only in strict mode)

    Every scope has access to variables from all parent scope.s This is scope chain. It is the mechanism js uses to look up variables. When a variable is not in the current 
    scope, the engine looks up in the scope chain until it finds the variable it's looking for. This process is called variable lookup.

    The scope chain is a one-way street. A scope will never ever have access to the variables of inner scope.
    For a variable declared with var block scopes don't apply on it. They are fn scoped (variables declared in var end up in closest fn scope).

    Scope chain in a certain scope is equal to adding together all the variable environments of all the parent scopes. The scope chain has nothing to do with the order in 
    which fns were called. It does not affect the scope chain at all.
*/ 

/* Hoisting : Makes some types of variable accessible/ usable in the code before they are actually declared. 

    "Variables lifted to the top of their scope" => Behind the scenes: Before execution, code is scanned for variable declarations 
    during the creation phase of execution context. Then for each variable found in the code, a new property is created in the variable env obj.

    Hoisting is different for different variable types.

                                    Hoisted                 Initial Value          Scope
    Fn declaration               :    Yes                    Actual fn            block (only for strict mode ow fn scoped)  // this means we can use fn declarations before they are actually declared in the code.
    var variables                :    Yes                    Undefined            Fn

    let and const variables      :    No (Technically       <uninitialized>,      Block
                                       they are hoisted     Temporal Dead Zone
                                       but not in practise)

    fn expressions and arrow fns :    Depends on whether they are declared using
                                      var or let or const 
    */

/*
    Temporal Dead Zone , Let and const

    const myName = 'Milan'
    if(myName === 'Milan){
        console.log(`Milan is a ${job}`) // Reference Error : Cannot access 'job' before initialization
        const age = 2025 - 2003
        console.log(age)
        const job = 'teacher' // line from 192 to 194 is temporal dead zone for job variable. Variable is only safe to use after TDZ
        console.log(x) // Reference error : x is not defined
    }

    Temporal dead zone is the region of the scope in which the variable is defined but can't be used in any way. TDZ makes it easier to 
    avoid and catch errors where a variable is used before it's properly set. Accessing variables before declaration is bad practise and
    should be avoided. It also makes the const variables actually work the way they are supposed to. ie We can't just declare const variable
    and initialize later. const can't be reassigned.

    Why hoisting ? 
    => Use fns before actual declaration
    => var hoisting is just a byproduct of hoisting fns
*/
