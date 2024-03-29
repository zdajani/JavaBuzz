describe('Javabuzz', function() {

  var javabuzz;

  beforeEach(function(){
    javabuzz = new Javabuzz();
  })

  describe('knows when a number is', function() {

    it('divisibile by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisibile by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisibile by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });

  });

  describe('knows when a number is Not', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(1)).toBe(false);
    });

    it('divisible by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);
    });

  });

  describe('when playing, says', function() {

    it('"Java" when a number is divisible by 3', function(){
      expect(javabuzz.says(3)).toEqual("Java");
    });

    it('"Buzz" when a number is divisible by 5', function(){
      expect(javabuzz.says(5)).toEqual("Buzz");
    });

    it('"Java" when a number is divisible by 15', function(){
      expect(javabuzz.says(15)).toEqual("JavaBuzz");
    });

    it('when number is not divisible by 3, 5, or 15', function(){
      expect(javabuzz.says(1)).toEqual(1);
    });

  });

});
