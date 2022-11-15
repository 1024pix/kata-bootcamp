const { expect } = require('chai');

let score = (value) => {

    return value;
}

it('should return a score of 9', function() {
    expect(score(9)).to.equal(9);
});

it('should return a score of 8', function() {
    expect(score(8)).to.equal(8);
});

it('should return a sum of bowling turns', function() {
    expect(score([8,4])).to.equal(12);
});
