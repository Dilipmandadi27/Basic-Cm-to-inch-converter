//         // this is an alert

//         // alert("hi how ! are you bangaaruuuuuuuuu");
//         console.log("hello");

//         // *Variables = 8 bytes which is 64bits

//         let score = 0 //initialization 

//         score = 10 // assignment

//         console.log("score is " + score);

//         let amount = 1000; // variables are stored into memory in binary format 1010

//         console.log("Your bill amount is Rs." + 1000)


//         /* Operators
//         -------------

//         arithmetic operators: + - * ** / % ++ --
//         assignment operators : = += -= *= /= %= **=
//         comparison operators: == === != !== > < >= <= ?
//         logical operators : && || !
//         bitwise operators : & | ~ ^ << >> >>>

//         pre increment ++a
//         pre decrement --a

//         post increment a++
//         post decrement a--
//  */
//         let a = 10;

//         console.log(a**2); 
//         // answer = 100, here a ** 2 means square of "a"

//         console.log(a**3);
//         // answer = 1000, here a ** 3 means cube of "a"

       

// -******************************************************************* js code**************************************************************************

function convert(){
    let cmVal = Number(document.getElementById("input").value)
    let incVal= cmVal/2.54
    let results= document.getElementById("results")
    results.innerHTML = incVal
  }