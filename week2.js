const readline=require('readline-sync');
const input=readline.question;

while(true)
{
    let running = input("Enter expression if you want to run program or Enter 'q' key if you want to exit program: ");
    let expression = running.split(" ");

    let calculator = 
    {
        num1: parseInt(expression[0]),
        num2: parseInt(expression[2]),
        operator: expression[1],
        calculation: function()
        {
        if(this.operator === '+')
        console.log(running + " = " + (this.num1 + this.num2))

        else if(this.operator === '-')
        console.log(running + " = " + (this.num1 - this.num2))

        else if(this.operator === '*')
        console.log(running + " = " + (this.num1 * this.num2))
        
        else if(this.operator === '/')
        console.log(running + " = " + (this.num1 / this.num2))
        
        else if(this.operator === '&')
        console.log(running + " = " + (this.num1 & this.num2))
        
        else if(this.operator === '|')
        console.log(running + " = " + (this.num1 | this.num2))
        
        else if(this.operator === '^')
        console.log(running + " = " + (this.num1 ^ this.num2))

        else if(this.operator === '>>')
        console.log(running + " = " + (this.num1 >> this.num2))

        else if(this.operator === '<<')
        console.log(running + " = " + (this.num1 << this.num2))

        else if(this.operator === '>>>')
        console.log(running + " = " + (this.num1 >>> this.num2))

        else
        console.log("Invalid operator")
        }   
    }

    if(running ==='q'){
    console.log("program exit");
    break;}
    
    calculator.calculation();
}
