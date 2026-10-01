/*console.log("Hello");

//1.console.log(window); // error as window is a browser property global object

//console.log(process); //no error as global object of nodejs server

// no use of DOM as it is browser property

function add(a,b){
    return a+b;
}

const sum=function(a,b){
    return a+b;
}

sum.ran="Saatvik"; 

const sum2=(a,b)=>a+b; // arrow function or anonymous or lambda function

console.log(sum.ran); // Saatvik
console.log(sum.name); // sum */

//2.Arrow or lambda function

/*const square=(x)=>x*x;
console.log(square(3));

function multiple_lines(a,b){

    const ans=Math.sqrt(a*a+b*b);
    return ans;
}

console.log(multiple_lines(3,4));

// make arrow function for
function fn(a,b){
    return {name: a,class:b};
}

const ans_fun=(a,b)=>{
    return {name:a,class:b};
}

console.log(fn("Saatvik","D"));*/

//3.Importing a module
/*
const math=require("./math.js");  ./-->search in current directory to avoid error
console.log(math); // full value
console.log(math.add(3,6));
console.log(math.multiply(2,5));
*/

//4.Modules
// fs module-->writeFile,writeFileSync

const fs=require("fs"); 
/*onsole.log("start");
//const data=fs.appendFileSync("./Hello.txt","Hello it is written by fs module");

fs.writeFile("./Hello.txt","Hello it is Async by fs module",(err)=>{
    if(err){
    console.log("Error Occured");
    return;
    }
    console.log("Safe");
});
//console.log(data);
console.log("end"); */

console.log("Start");
const data=fs.readFileSync("Hello.txt","utf-8");
console.log(data);

fs.readFile("Hello.txt","utf-8",(err,data)=>{
    if(err){
    console.log("Error Occured");
    return;
    }
    console.log(data);
});

console.log("End");





