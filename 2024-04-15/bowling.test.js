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

test('le premier lancer fait tomber une quille, donne le score 1', ()=> {
    //given

    //when
    const score = calculeScore("10 00 00 00 00 00 00 00 00 00");
    //then
    assert.strictEqual(score, 1);
});

test('le dixième lancer fait tomber une quille, donne le score 1', ()=> {
    //given

    //when
    const score = calculeScore("00 00 00 00 01 00 00 00 00 00");
    //then
    assert.strictEqual(score, 1);
});


test('X lancer font tomber chacun 1 quille, ce qui donne un score de 3 points', ()=> {
    //given

    //when
    const score = calculeScore("00 00 10 00 01 00 00 00 01 00");
    //then
    assert.strictEqual(score, 3);
});

// test('', ()=> {
//     //given
//
//     //when
//     const score = calculeScore("00 00 10 00 01 00 00 00 01 00");
//     //then
//     assert.strictEqual(score, 3);
// });