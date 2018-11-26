
describe("FizzBuzz", function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe("multiples of 3", function() {
    it("returns fizz when 3", function() {
      expect(fizzBuzz.play(3)).toBe("fizz");
    });

    it("returns fizz when 6", function() {
      expect(fizzBuzz.play(6)).toBe("fizz");
    });
  });
});
