function solution(price, money, count) {
    let totalUseMoney = 0;
    for (let i = 1; i <= count; i++) {
        totalUseMoney += i * price;
    }
    return totalUseMoney >= money ? totalUseMoney - money : 0;
}