var expect = requiere("chai").expect;

var getPrices = require("../src/shop-tools").getPrices

describe("getPrices", function(){
    var products = getPrices();
    
    it("should return an object which describes the prices of your products", function() {
        expect(products).to.eql({
          banana: 1,
          potato: 2,
          tomato: 3,
          cucumber: 4,
          salad: 5,
          apple: 6
        });
    });
});
