const readline=require('readline-sync');
const input=readline.question;

let calculator = {

    calculation: function(str)
    {
        if(str.includes("+") || str.includes("-") || str.includes("*") || str.includes("/") == true)
        return eval(str);
        
        else if(str.includes("^") || str.includes("&") || str.includes("|") || str.includes("<<") || str.includes(">>") || str.includes(">>>") == true) 
        return eval(str);

    } 

}

while(true){
let expression = input("Enter expression if you want to run program or Enter 'q' key if you want to exit program: ");

if(expression === 'q')
{console.log("program exit")
break;}

let result=calculator.calculation(expression)
console.log(expression + " = " + result);}