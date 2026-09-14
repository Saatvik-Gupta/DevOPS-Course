//1.
/* var a=10;

function fn(){
    console.log(a); // undefined not 10 as a present in its own environment no need for lexigonal parent validation
    var a=20;
}

fn();
console.log(a); // a=10 as fn(){...} deleted from its stack frame*/

//2. Scope of a variable nature in JS 
/*var a=10; // undefined->10

if(true){
    var a=20; // a becomes 20 from 10
    console.log(a);
}
console.log(a) //20*/

//3. Replacement of function scope (var)-> block scope let and const

/*let a=10; // if not defined here then for later reference error
if(true){
    let a=20;
    console.log(a); // 20
}

console.log(a); // 10*/

// 4.

/*var a=10;
{ 
    var a=20;
    {
        console.log(a);
        var a=30;
    }
    console.log(a);
}
console.log(a);*/

//5.
let x=10;
{
    let x=20;
    console.log(x);
}
console.log(x);



