// 3. How many trails to 1?

// Take a positive integer x. If x is even, divide x by 2 to get x / 2. If x is odd, multiply x by 3 and add 1 to get 3x + 1. Repeat the process indefinitely. No matter which number you start with, you will always reach 1 eventually during the process.
// Given a number x, return the number of steps required to reach 1.

let collatz = (num) => {
    // loop till the given num is not 1
    while(num != 1){

      //print the num
      console.log(num);

      //if the number is even
      if(num % 2 == 0){

        num = parseInt(num / 2); 

      }else{
        //if the number is odd
        num = (num * 3) + 1;
      }
    }

  // print the last number
  console.log(num,"stop");
}
collatz(12)