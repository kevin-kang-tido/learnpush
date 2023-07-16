

// define function
function welcomeMessage(){
    document.querySelector('#demo').innerHTML="Hello";
}
//execute_ call a funtion
// welcomeMessage();
// function getting(name) this is how we called 
// funciton(មុនងារ) have parameter;

function getting(name_new){
    document.querySelector("#demo").innerHTML=`Welcome,${name_new}`;
}
// getting("Mr kevin");
// let fullname=prompt("Enter you name:");
// getting(fullname);


// default value parameter
function sum(num1=20,num2=50){
    return num1 + num2;
}

let result= sum(12e8 , 30e12);
document.querySelector("#demo").innerHTML=`Result : ${result}`;


let animal=[
    {
        titile:'cat';
    },
    {
        titile:'cat';
    }
]

// syntax arrow funtion: () => statement 
animal.map((ani) => {
    // same the operation as the noraml 
    console.log(ani);

});
animal.map(function(){
    console.log(ani);

});
