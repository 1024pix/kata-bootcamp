const { expect } = require('chai');

let score = (value) => {

    return value.reduce((acc,value)=> {
        return acc + value;
    });
}

it('should return a score of 9', function() {
    expect(score([9])).to.equal(9);
});

it('should return a score of 8', function() {
    expect(score([8])).to.equal(8);
});

it('should return a sum of bowling turns', function() {
    const thowsList = [8, 0, 4, 0, 0, 0, 0, 0, 0, 0]
    expect(score(thowsList)).to.equal(12);
});
