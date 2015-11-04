// Test Suite Name
describe("add", function() {

  // Test Case - 1
  it("should be able to add two numbers", function() {
    var a = 10;
    var b = 20;
    var expected = 30
    var result = add(a,b);
    expect(expected).toBe(result);  // Assertion

  });  // Test Case -1 Code Ends Here

  // Test Case - 2
  it("should be able to add two strings", function() {
    var a = "10";
    var b = "20";
    var expected = 130
    var result = add(a,b);
    expect(expected).toBe(result);  // Assertion

  });  // Test Case -2 Code Ends Here

  // Test Case - 3
  it("should be able to add two functions", function() {
    var a = function(){
      return 1000;
    };

    var b = function(){
      return 2000;
    };
    var expected = 3000;
    var result = add(a,b);
    expect(expected).toBe(result);  // Assertion

  });  // Test Case -3 Code Ends Here

  });  // Test Suite Code Ends Here
