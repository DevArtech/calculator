let num1 = 0;
let operator = 0;
let num2 = 0;
let solution = 0;

let number = document.getElementById('numberInFunction');
let functionBar = document.getElementById('functionBar');
let icon = document.getElementById('ico');

icon.addEventListener('mouseover', function(event) 
{ 
    event.target.className = "fa-brands fa-github fa-xl fa-shake";
})

icon.addEventListener('mouseleave', function(event) 
{ 
    event.target.className = "fa-brands fa-github fa-xl";
})

number.textContent = "";
functionBar.textContent = "";

function operate() 
{
    console.log(num1 + " " + operator + " " + num2 + " =");

    if(operator == "+") 
    {
        console.log(num1 + num2);
        return num1 + num2;
    }
    else if(operator == "-") 
    {
        console.log(num1 - num2);
        return num1 - num2;
    }
    else if(operator == "*") 
    {
        console.log(num1 * num2);
        return num1 * num2;
    }
    else if(operator == "/") 
    {
        if(num2 == 0) 
        {
            console.log("Heh, no.");
            return "Heh, no.";
        } 
        else 
        {
            console.log(num1 / num2);
            return num1 / num2;
        }
    }
}

function percentOperator() 
{
    let functionArray = functionBar.textContent.split(" ");
    let percent = number.textContent;

    let length = functionArray.length


    if(length == 1) 
    {
        functionBar.textContent = "";
    }
    else if(length== 3) 
    {
        functionArray.splice(2, 1);
        functionBar.textContent = functionArray.join(" ");
    }

    number.textContent = '';
    percent = percent / 100;

    if(length == 1) 
    {
        appendVisible(percent);
    }
    else if(length == 3) 
    {
        appendVisible(" " + percent);
    }
}

function equate() 
{
    let functionArray = functionBar.textContent.split(" ");

    num1 = parseFloat(functionArray[0]);
    operator = functionArray[1];
    num2 = parseFloat(functionArray[2]);
    solution = operate();
    number.textContent = solution;
    functionBar.textContent = solution;
}

function clearAll() 
{
    num1 = 0;
    operator = 0;
    num2 = 0;
    solution = 0;
    number.textContent = "";
    functionBar.textContent = "";
}

function switchSign() 
{
    if(number.textContent !== "+" || number.textContent !== "-" || number.textContent !== "*" || number.textContent !== "/") {
        let value = number.textContent;
        let switchedValue = value
        if(Math.sign(value) == 1) {
            switchedValue = value - (value * 2);
        }
        else if(Math.sign(value == -1)) {
            switchedValue = value + (value * 2);
        }

        number.textContent = switchedValue;
        let functionArray = functionBar.textContent.split(" ");
        let fcntSelect = functionArray.length - 1;

        functionArray[fcntSelect] = switchedValue;
    
        let newFunction = functionArray.join(' ');

        functionBar.textContent = newFunction;
    }
}

function backSpace() 
{
    number.textContent = number.textContent.slice(0, -1);
    functionBar.textContent = functionBar.textContent.slice(0, -1);
}

function appendVisible(variable) 
{
    let functionArray = functionBar.textContent.split(" ");

    if(variable == "." && number.textContent.includes('.')) 
    {
        return;
    }

    if(number.textContent == "+" || number.textContent == "-" || number.textContent == "*" || number.textContent == "/") 
    {
        number.textContent = variable;
        functionBar.textContent = functionBar.textContent + " " + variable;
    }
    else if(variable == "+" || variable == "-" || variable == "*" || variable == "/") 
    {
        if(functionArray.length == 3) 
        {
            num1 = parseFloat(functionArray[0]);
            operator = functionArray[1];
            num2 = parseFloat(functionArray[2]);
            functionBar.textContent = operate();
        }

        number.textContent = variable;
        functionBar.textContent = functionBar.textContent + " " + variable;
    }
    else 
    {
        if(number.textContent.length >= 9) 
        {
            return;
        }

        number.textContent = number.textContent + variable;
        functionBar.textContent = functionBar.textContent + variable;
    }
}