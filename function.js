// function say(){
//     console.log("hai global scope");
//     console.log("within"+a);

// }
//  say()
//  console.log("outside" +a);


// function say(){
//     let name="Java script"
//     console.log("hai global scope");
//     console.log("within the function"+name);
// }    
// say()
// //local scope
//the block scope of the variable
// function Voting(age){
//     if(age>=18){
//         let iscloudy=true;
//         var israining=true;
//         console.log("Eligible")
//         console.log(iscloudy);

//     }
//     //console.log(israining);

// }
// Voting(18)


 function text(){
    console.log("message");
 }

 function send(callback){
    console.log("message sended");
    callback();

}
 send (text);
 