// function occ (str, c) {
//     let numOcc = 0

//     for(let i =0; i < str.length; i++){
//         if(str[i]=== c){
//             numOcc++
//         }
//     }
//     return numOcc
// }


// function numbOcc = (str,c) => str.match(new RegExp(c, 'ig') || []).length

// const findNeedle = haystack => `found the needle at position` + haystack.indexOf('needle')

// const minInt = arr => Math.min(...arr)

// function minInt(arr){

//     let min = arr[0]

//     for(let i =0; i > arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i]
//         }
//     }
// }

// const greetingg = name => `Hello, ${name}`
// const greeting = name => 'Hello, ' + name

// function squareNum(int){
//     let array = int.toString().split('') 
//     let squareArr = []

//     for(let i = 0; i<array.length; i++){
//         squareArr.push(array[i]*array[i])
//     }

//     return Number(squareArr.join(''))

// }


// const squareNum = int => int.toString().split('').map(e => e*e).join('').toNumber()

// Object.entries builds an array of the key and values as an array an array of arrays
// Object.keys builds an array of the keys
// Object.assign combines an object into another boje


// Math.max(a)

// blockquote, cite, q  and cite is an attribute

// float removes the element from the flow of the page and position the child horizonatlly within the parent container.  left right and both

// clearfix helps with stopping a parent container for collapsing when the children are floated.
//  
// label can give textarea, input or wording.  It is not a self-containing tage, you write in the tag.
// for is attached to the id of what it is linked to
//  also want name so

// only does it for the specific mode, but old browsers do not recognize it

// @media all and (max-width: 1024px) { }

// keeping selectors short allows all other selectors to be less specific which helps with
// portability, manageibeley and improves efficiency, and inheritence

// function intSquare = int => Number(int.toString().split('').map(e=>e*e).join(''))

// flex: grow shrink basis
// :wq
// :q!

// git log

// .join('') combines an array into a stri
// short circuit evaluation is a true false statement
//  let name = username || stranger

// .join('')

// function declaration is bound to an identifier, the function declaration is just a unit of code that exists.  It must be called in order for it to be executed

// constructor property is there to identify what function created it, where the internal prototype property is there for help with inheritance of the object so 

// an array is an ordered collection of data, that is indexed and starts at 0.
//  arrays have methods to help organize this data and they can be created with literal notation or by a constructor

// it is generally a good idea to put css in the head, because as the ui loads you want the content to load with it's styling, and you put the javascript at the end of the body to avoid blocking the critical rendering path which helps to improve page load time.  Both help improve the overal user experience

// you must be mindful to open up the http local host and not from the index.html file
//  need to access server over the internet

// it will keep loading as it expects a response back, you can use res.redirect to the homepage

// it used to but now it is built and and can be 
// done with the res.body

// you have a database: can be empty
// collections go inside the database
// documents within collectiosn that are key-value pairs

// methods.
// find, insertone, 

// find(), returns a cursor which points to where the data is.  Find has methods that can display data like toArray

// .then method waits until the promise is returned and then executes the next data

//  overflow: auto

// color url position repeat

//  display:inline-block
//  width 30% margin

// simple set of instructions, reusable, perform one action as best practice
// building blocks of a program

// a set of instructions for a computer to understand and exccute

// seperate structure from skin and content from container

// general sibling selector ~ selects all that follow the elemnt
// adjacent is a + and follows directly after

// / / is delimeters, [] tell the character set of the search expression, i is case insensitive and g is global meaning it will go throught he whole string

// you use methods like insertOne, deleteOne, find()

// the page will keep loading because it expects something form the server.  can use res.redirect back to homepage

// npm install body-parser, const bodyParser = require(;b)
// app.use for when you want to use middleware

// databases, can be empty, can set privledges, can have multple
// collections are within databases
// documents within collections and they have key-value pair data

// it sends a cursor that points where the data is.  You can use another method built into find like toArray() to display it

// .then is executed after a promise, and it can 

// you must be mindful of connecting with server and not locally by just opening the index.html file

// read - get
// create - post
// update - put
// delte - delete

// no they are not full programming languages, they are just mark up languages they can not perform computations
// js is a full programming language

// mobile first approach is the idea that website media queries should be set up to server the mobile user first because
//  that way they are not having to load extra data that is on a desktop that won't be seen on a mobile device
// faster loading, conserv

// css rule, p is the selector, declaration block, declarations, property and value

// email, date, time, url, tel, number

//  parent will collapse when child is floated so clearfix resolves this issue
//  so the structure of the website is not messed with
// content: "", display:table

// a href="mailTo:bb"

// ogg, mpeg, wav

// mark up languages, html for structure and content, css for style.  Can't do logic handling, store or manipulate data
// declarative language: what should be done not how

// git add ., .txt, -A, 

// functions are simple set of instructions, they are reusable, they are the building blocks of programming
// best practice to perform one action

// hide the details, show the essentails
// it promotes greater modularity

// encapsulation fuses the data with the methods
// also seperates the back end from the front interface
// this protects the data from outside interference with getter/setter functions
// controls the way in which the dta 

// keyword deals with flow of execution, and language contructs
// operators deal with perfoming calculations

// keyword deals with flow executions, and defining language constructs
// operators manipulate values and perform calculations

// session only last while prow

// object.value is a quick way to turn the values of an object into an array, similar to a for..in loop

// when you use new, the internal prototype property is set to the constructor functions prototype, where as an object literal is sent to the object.protoype gloabal

// a regular expression is a search pattern, can have hardcoded with delimiters /  / or ca do new RegExp(variable, flags) to create an ojbects

// an async function automatically returns a promise.  If the value is regu
// automaticlaly wraps the value in a Promise that resolves with that value

// not a number, falsey value it is the equivalent of undefined

// a constructor is a special method within a class that is automaticlaly executed when the new keyword is used
// it initializes the object, and states the definition of what the object will have.

// keyword deals with execution flow and defines language constructs
// operator mainpulates values, and perform c

// it means it will return a resolved promise
// it will return a value wrapped in a resolved promise
// it will be accessbile with methods like .this and .catch
// it will auto wrap 

// you must use the object itself

const occ = (str, c) =>  (str.match(new RegExp(c, 'ig'))|| []).length

const secOcc (str, c){
    let newStr = str.split('')
    let occurences = 

    for(let i=0; i < newStr.length; i++){
        if(newStr[i] === c){
            occurences.push()
        }
    }
}

divisor = 20%6

// they all deal with how a javascript is loaded and executed with different use cases.
// it's important for the developer to undertand how each one works for improve

// array.from, takes a map funciton can apply it to multiple

//  delimieters mark a search pattern reg exp [] hard code character set

// .join method combines an array into a string ", "
























