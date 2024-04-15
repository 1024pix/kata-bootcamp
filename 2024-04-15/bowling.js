module.exports = function calculeScore(lancers) {
    return lancers.split(' ').map((manche) => {
        return manche.includes("-") ? 10 : parseInt(lancer)
    }).reduce((score,lancer) => {
        return score + lancer;
    }, 0)
}
