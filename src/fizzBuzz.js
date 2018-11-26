function FizzBuzz() {

}

  FizzBuzz.prototype.play = function(number) {
    if(number % 5 === 0) {
      return "buzz";
    } else {
      return "fizz";
    }
  }
