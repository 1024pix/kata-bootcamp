module.exports = function calculeScore(lancers) {
    return lancers.split('').filter((lancer) => lancer === "1").length;
}
