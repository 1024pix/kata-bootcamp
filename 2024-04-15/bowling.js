module.exports = function calculeScore(lancers) {
    return lancers.split('').map((lancer) => {
        return lancer === ' ' ? 0 : parseInt(lancer)
    }).reduce((score,lancer) => {
        return score + lancer;
    }, 0)
}
