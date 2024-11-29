// Problem#1: Declare 3 variables in one statement. 
var firstVariable = 20, secondVariable = 50, thirdVariable = 50;
console.log("firstVariable ", firstVariable, " \nsecond variable ", secondVariable, " \nthird variable ", thirdVariable );

// Problem#2: Declare 5 legal & 5 illegal variable names.

// 5 Legal Variable Names:
myVariable = 10; //Starts with a letter, followed by letters and numbers.
_privateVar = "John Doe"; //Starts with an underscore, followed by letters and numbers.
myFirstVariable = 50;//Uses camelCase convention, common in many languages.
MY_CONSTANT = true;//Uses uppercase letters and underscores, often for constants.
counter123 = 100; //Starts with a letter, followed by letters and numbers.

// 5 Illegal Variable Names:
1stVariable= 10; //Starts with a number, which is not allowed.
my-variable= "John Doe";//Contains a hyphen, which is not allowed in most languages.
class = "John Doe"; //This is a reserved keyword in many languages.
my variable = 10;//Contains a space, which is not allowed.
%discount = 10;//Starts with a special character, which is generally not allowed.
