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


test('3 lancers font tomber chacun 1 quille, ce qui donne un score de 3 points', ()=> {
    //given

    //when
    const score = calculeScore("00 00 10 00 01 00 00 00 01 00");
    //then
    assert.strictEqual(score, 3);
});

test('3 lancer font tomber chacun 2 quilles, ce qui donne un score de 6 points', ()=> {
    //given

    //when
    const score = calculeScore("00 00 20 00 02 00 00 00 02 00");
    //then
    assert.strictEqual(score, 6);
});

test('on fait un spare mais pas de bonus, ce qui donne un score de 10 points', ()=> {
    //given

    //when
    const score = calculeScore("00 0- 00 00 00 00 00 00 00 00");
    //then
    assert.strictEqual(score, 10);
});

test('on fait tomber 2 quilles puis un spare, ce qui donne un score de 10 points', ()=> {
    //given

    //when
    const score = calculeScore("00 2- 00 00 00 00 00 00 00 00");
    //then
    assert.strictEqual(score, 10);
});