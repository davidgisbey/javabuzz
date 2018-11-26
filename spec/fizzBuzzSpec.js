
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

  describe("multiples of 5", function() {
    it("returns buzz when 5", function() {
      expect(fizzBuzz.play(5)).toBe("buzz");
    });

    it("returns buzz when 10", function() {
      expect(fizzBuzz.play(10)).toBe("buzz");
    });
  });

  describe("multiples of 15", function() {
    it("returns fizzbuzz when 15", function() {
      expect(fizzBuzz.play(15)).toBe("fizzbuzz");
    });

    it("returns fizzbuzz when 30", function() {
      expect(fizzBuzz.play(30)).toBe("fizzbuzz");
    });
  });

  describe ("normal integers return themselves", function() {
    it("returns 7 when 7", function() {
      expect(fizzBuzz.play(7)).toBe(7);
    });
  });
});
