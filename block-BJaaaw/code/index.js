// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let num = prompt(`Enter Number`);
if (num % 2 === 0) {
  alert("number is even");
} else if (num != 0); {
  alert ("number is odd");
}


// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let number1 = prompt('Enter number1');
let number2 = prompt('Enter number2');
if (number1 > number2) {
  alert ("number1 is greater");
} else { 
 alert( "number2 is greater");
}
// 3. Convert the above code using`?` terniary operator
let number01 = prompt('Enter number1');
let number02 = prompt('Enter number2');
number01 > number02 ?
alert("number1 is greater")
:
alert( "number2 is greater")
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName = prompt('House Name');
if (houseName === "stark") {
  alert("Winter is Coming");
} 
else if (houseName === "lannister") {
  alert("A lannister always pays his debt")
}
else {
  alert("All men must die");
}



// 5. Convert the above code using`?` terniary operator
let houseName01 = prompt('House Name');
houseName01 === "stark" ?
alert("Winter is Coming")
:
houseName01 === "lannister" ?
alert("A lannister always pays his debt")
:
alert("all men must die")
Switch
let houseName02 = prompt('House Name');
switch(houseName02) {
  case "stark":
    alert("Winter is Coming");
    break;
    case "lannister":
      alert("A lannister always pays his debt");
      break;
      default:
        alert("all men must die")
}
// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let months = prompt('Month');
switch(months) {
  case "january":
    alert("31");
    break;
    case "february":
    alert("28");
    break;
    case "march":
    alert("31");
    break;
    case "april":
    alert("30");
    break;
    case "may":
    alert("31");
    break;
    case "june":
    alert("30");
    break;
    case "july":
    alert("31");
    break;
    case "august":
    alert("31");
    break;
    case "september":
    alert("30");
    break;
    case "october":
    alert("31");
    break;
    case "november":
    alert("30");
    break;
    case "december":
    alert("31");
    break;

}
/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary = Number(prompt("user salary"));
if (salary <= 20000){
  alert(`your in hand amount ${salary - (salary*10)/100}`);
}
else if (salary <= 40000){
  alert(`your in hand amount ${salary - (salary*20)/100}`);
}
else if (salary > 50000){
  alert(`your in hand amount ${salary - (salary*30)/100}`);
}
//  if..else vs switch
let income = Number(prompt("Enter your salary"));
switch(true){
  case income<=20000:
    alert(`In-hand amount ${income -( (10/100) * income)}`);
    break;
  case income<=40000:
    alert(`In-hand amount ${income - 20/100 * income }`);
    break;
  case income > 50000:
    alert(`In-hand amount ${income - 30/100 * income }`);  
    break;
    default:
      alert("Not a valid input");
} 
/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
// if else
let marks = Number(prompt("Enter marks"));
if (marks > 100) {
  alert("Marks can't be greater than 100")
}
else if (marks > 80 && marks < 100) {
  alert("Grade A")
}
else if (marks > 50 && marks < 80) {
  alert("Grade B")
}
else if (marks > 30 && marks < 50) {
  alert("Grade C")
}
else if (marks > 0) {
  alert("Grade D")
}
// switch
let yourMarks = Number(prompt("yourMarks"));
switch(true) {
  case yourMarks>100: 
    alert("yourMarks can't be greater than 100")
  case yourMarks > 80 && yourMarks < 100: 
    alert("Grade A")
    break;
    case yourMarks > 50 && yourMarks < 80: 
    alert("Grade B")
    break;
    case yourMarks > 30 && yourMarks < 50: 
    alert("Grade C")
    break;
    case yourMarks > 0 : 
    alert("Grade D")
    break;
    default : 
    alert ("invalid input")
}


/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt('What is the weather like outside?');
switch(weather) {
  case "sunny" :
    alert("Wear a T-shirt")
    break;
    case "rainy" :
    alert("Don't forget to take your raincoat")
    break;
    case "hot" :
    alert("Get a hanky")
    break;
    case "freezing" :
    alert("Get your sweeter on")
    break;
    default : 
    alert("Not a valid input")

}
 
