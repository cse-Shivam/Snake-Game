// javascrpit basics
// input -output , variables , datatypes
// conditional statements
// loops
// functions
//  objects(JSON)

//variables

var q ="Hello";
var w =5;
var c=10;
d=w+c;

//Output-> document ,  ->console


//output to the html 
//append text to the document(DOM -Document Object Model) It is a tree of html tags.
document.write("Hello");
document.write("World");
//output to the console
console.log("world");

//Promt
//name=prompt("Enter your name ");
// Alert Box
//alert("Game Over" +name);

//Functions -2 ways

function fun(){
    console.log("having fun in game webinar !!");
}

fun();

//another way to write a function
var funtoo=function(){
    console.log("Too much fun!!");
    return 5;
}

//function hoisting 
// fnc move to the top of the code ,thus 
// fun();
//function fun(){
//console.log("hii");
//}

//although fun() is getting called before it is defined , this code runs corectly bcz of function hoisting . functions defined as such move to the top of the code automatically.

//iff we call funtoo before defining , then it shows an error bcz that type of func definitions are not hoisted.
//concept HOISTING

var apple=10;
var mango=0;
 var funtoo1=function(){
     var apple=50;
     //this is a local variable ,,,that is local to the function
     mango=9; //Global variable
     papaya =90; //if we do not use var it becomes a global variable
 }
 
 console.log(apple); 

//functions

a=["apple","mango","guava",10 , 5.5];

console.log(a);

for(var i=0; i<a.length ; i++)
    {
        console.log(i+"=" +a[i]);
    }

a.forEach(function(i , fruit){
    console.log(i+"-"+fruit);
})

//operations over the array

a.push("banana");
//adds an element at the end of the loop

a.pop();
//remove from end
//unshift=adds to the front
//shift=removes from front
//LinearSearch  - indexOf

a.indexOf("Guava");

//conditional

if(5>3){
   console.log("yes , greater");
   }
else{
    console.log("no , it is not");
}

// event listeners :
//some code which listenes to these events :
//firsyt need to fetch the div from html

myDiv=document.getElementById("mydiv");

console.log(mydiv);

//listen on mouse click on div

function mousePressed(someInfo){
    console.log("you pressed the mouse");
    console.log(someInfo.clientX + "-"+someInfo.clientY);
}
myDiv.addEventListener('mousedown',mousePressed);

//mouseup , keypressed , keydown , keyup - events

//Json= JavaScript Object Notation
//key value in curly braces

var bird={
    x:10,
    y:30,
    color:"red",
    
    eggs:[1,2,3,4,5],
     fly:function(){
         console.log("bird is flying");
         console.log(this.x);
     }
    
}

console.log(bird.x);