function solution(n, lost, reserve) {
    let answer = n - lost.length;
    let realLost = lost.filter((n) => !reserve.includes(n));
    let realReserve = reserve.filter((n) => !lost.includes(n));
    answer += lost.length - realLost.length;
    realLost.sort((a, b) => b - a);
    realLost.forEach((n) => {
        if (!realReserve.length) return;
        if (realReserve.includes(n + 1)) {
            realReserve = realReserve.filter((el) => el !== n + 1);
            answer++;
        } else if (realReserve.includes(n - 1)) {
            realReserve = realReserve.filter((el) => el !== n - 1);
            answer++;
        }
    })
    return answer;
}