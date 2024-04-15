const test = require('node:test');
const assert = require('node:assert');
const calculeScore = require('./bowling');

test('aucune quille tombée score à 0', ()=> {
    //given

    //when
    const score = calculeScore("00 00 00 00 00 00 00 00 00 00");
    //then
    assert.strictEqual(score, 0);
});

test('une seule quille tombée donne le score 1', ()=> {
    //given

    //when
    const score = calculeScore("10 00 00 00 00 00 00 00 00 00");
    //then
    assert.strictEqual(score, 1);
});
