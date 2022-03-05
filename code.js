let num1 = 0;
let operator = 0;
let num2 = 0;

function operate() 
{
    console.log(num1 + " " + operator + " " + num2 + " =");

    if(operator == "+") 
    {
        return num1 + num2;
    }
    else if(operator == "-") 
    {
        return num1 - num2;
    }
    else if(operator == "*") 
    {
        return num1 * num2;
    }
    else if(operator == "/") 
    {
        if(num2 == 0) 
        {
            return "Heh, no.";
        } 
        else 
        {
            return num1 / num2;
        }
    }
}

num1 = prompt("First Number: ");
operator = prompt("Operator: ");
num2 = prompt("Second Number: ");
console.log(operate());