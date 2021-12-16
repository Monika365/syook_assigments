// 1. Am I Perfect?

// Write a function that tells if a given number is perfect or not. A number is called perfect if the sum of the factors of a number (excluding the number itself) is the number itself.
// Output
// Return “Perfect” if the number is perfect
// if the sum of factors is greater than the input return “Abundant”
// if the sum of factors is lesser than the input return “Deficient”.

function is_perfect(number)
{
var temp = 0;
   for(var i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === number && temp !== 0)
        {
       console.log("It is a perfect number.");
        } 
     else if(temp > number){
        console.log("Abundant");
     }else if(temp < number)
        {
       console.log("Deficient");
        }   
 } 
is_perfect(6);



