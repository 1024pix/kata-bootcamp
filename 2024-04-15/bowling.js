module.exports = function calculeScore(lancers) {
    return lancers.split('').map((lancer) => {

        return parseInt(lancer)
    }).reduce((score,lancer) => {
        return score + lancer;
    }, 0)
}
