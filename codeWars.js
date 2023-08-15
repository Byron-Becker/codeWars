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

// or operator returns the first truthy value.  Null is falsy and an empty array is truthy

//  the replace method takes in a search pattern reg expressiongand then replaces it with the 

// nodemon auto reconnets server when there is achange to the coe
//  npm install nodemon --save
// run the script run dev: 

// npm install ejs --save

// app.set('view engine', 'ejs;)

must put it before app.use, app.get

// body parser cleans up a form and you access it with body.  built into express now, but not before
// npm install body-parser --save
// const bodyParser = app.use('b)

// JSON stands for javascript object notation, it is similar to a javascrip object but puts the key and the value in quotation marks

// you used to have to use a bodyParser but now it's built into express

// JSON.stringify({
//     put the object here
// })

// you put it in the body property

// npm install express -- save
// const express = require('express')
// const app = express()
// const PORT = 8000


// app.listen(PORT, function(){
//     console.log('Running on 8000')
// })

// it lets the server know what kind of data you are sending it

// npm install ejs --save
// app.set('view engine', 'ejs;)
// put it before app.use/get/post

// javacript object notation
// it is similar to an object except the key and value are wrapped in quotes

// you convert it in the body: JSON.strinigy(
    name:
)

query, update, option
// query lets you search for a specific key and value
// update you can choose how to update
// optio is other p

// npm install mongoDB --save
// const MongoClient = require('mongodb').Mongoclient
// MongoClient.connect(mongo string, (err, client) => {

})

dirname directory you are in    

// when you add a script key you are put a script in with a specific key to be used like npm run dev

// res.redirect('/')

// res.sendFile(__dirname + '/index.html)

// app.get('/', req res =)
res.send()

// it means that the content sent to the server will be in json format

// const Mongoclient = require('mongodb').MongoClient
// Mongoclient.connect('mongo key', (err,client))

// no they are markup langaugaes, they say what to do not how.  can't perform computations or conditional logic


// when the condition cannot be satisified

initializiton, conditonal. update
for loop is a controlf low structure

// keywords deal with the flow of executions and define language constructs
// operators manipulate values and perform computations

// async before a function means that the function will return a promise.  it will be accessible with .then and catch
// async will auto wrap the non-promise value in a resolved promise

// a function expression is a funciton that is assigned to variable.  it has access to this keyword, it does not 
// function expressions make it easier to call the function

// cURL - it a CLI way of making network requests.  can be used with different OS, network protocols, 
// fetch is a promised based javscript api that deals with network http requrest on the client side

//  cURL can be used on both serverside and client side

// functions are a simple set of instructions for thte computer to understand and execute
// best practice for it to perform one action
// they build programs

// a for in loop that takes a funciton as an argument, good if you just need to query and don't need a new array or break out of it element index and array

// hide the details show the essentials.  Abstrcation is 
// encapsulation: fuse the data with the methods that will use it
//  also decouples the back end data from the 

// deals with flow of execution and defines language constructs
// oer

// reduce method reduces the elements of an array to a single output. can apply a function

// trim method trims out whitespace on ends of strings and beginning

// object destructing is when you take out properties and store them in variables

// z index is a css property that helps with overlaying elements for web pages like a dropdown navigation bar.
// the elements are stacked in a numbered order along the z index
// stacking context is formed on positioned elements (fixed,sticky,relative, absolute)
// the parents are given a zindex and the children adopt that

// floats are when elements are floated or taken out of the normal flow of the web page, and can be positioned within
//  horizontally within the container they are in with the other content flowing around them.
// this has been mostly replaced by flexbox and grid however

// you can use http headers to detect the user's preference, you can create a drop down menu for them to choose.
// developers should aslo consider using the internationalization technique for easier switching between language
// text can be stored in files that are more easily translated without having to change source code
// also using locale-based formatting like internationalformat in javascript

for(let i = 1; i<=num.length)

// split method splits a string into an array of substrings

// express function is very similar to an event listner

// ctrl c


// findOneand Update (query, update and option)
// query lets you search a collection for a key-value pair
// update uses $set, $push, to update it 
// option has other options like upsert if there is nothing to fix it adds it

// JSON.stringify() in the body.  similar to an object but key and value are wrapped in quotes

// lets the server know that the data sent to it in the body will be in json format
// headers:{'content-type'} 
// javascript object notation
// it's like an object but key and value wrapped in quotes

// npm install ejs --save
// app.set('view engine', 'ejs')

// a promise states that a function will return a value at some point in the future or not

// .then attaches callbacks to be executed when a promise is resolved or rejected in an error   


// orientation media future deals with how the screen orients itself on mobile devices in landscape and portrati depending which way the device is held
// @media (orientation: portrait){

}

//  preload = "auto, metadata, none", autoplay, controls, volume-"1.0", muted, src, 

// textarea, select, input, only select needs name where input needs name on each one
// name= so server 

// action current url method get

// mobile first approach is the practice of putting mobile first in media queries so they do not have to download
// so they don't have to waste bandwitdth loading destop queries that are overwritten

// 1000 points, bang

// it is the built in object in JS that all objects can access for methods and properties
// number, function, symbol, boolean, date, array, object, 

// if/else and switch statements by allowing you to call methods in the object
// 

// every object has an internal prototype property that acts as a fallback for proeprties and methods.
// it refers to the object that created it
// allows for code reuse and object oriented programming

// object.values, or a for in loop

// splice modifies the elements of an array and can replace them.
// index start, num of indices, element

// a statement is a block of code that produces a specific results or performs a specific action
// in the context of a function it is what will be executed if the function is called
// assignments, conditionals, loops

// object.assign

// programming is writing a set of instructions for a computer to undertand
// programming is writing a set of instruction for a computer to unersatand and able to execute

// css selector specificty is how to solve the issue when mulitple css rules are targeting the same element.
// The selector with the highest specifiicty takes precedent
// it is established on a point system, inline css is a 1000, id is 100, class is 10 and regular elements are 1

// progressive rendering helps with increasing percieved page load time for the user by having the browser load the content in stages.
// when developing you should be mindful of what the user will be engaging with first on the website and 
//  load that first, while loading on ther content that is not as useful to the user later.
// improves user's overall experience and engagement.
// news website you load article first before the ads
//  product sid

// srcset attribute allows for more flMexibilty when rendering images for a user based on their speicfic network, and device conditions.
// By giving the browser the option with srcset attribute it can determine which is the best image size, resolution to send the user
// results in better performance and overall user experience


// you interact with collections using methods like findon

// npm install mongodb --save
// const MongoClient = require('mongodb').MongoClient
// MongoClient.connect('mongo script key', (err, client)=>{

// npm -save will save to dependencies for production of the app while --save-dev saves it to dev depenen

// must be mindful of connecting to server and not just opening file locally

// express no longer requires body-parser








































