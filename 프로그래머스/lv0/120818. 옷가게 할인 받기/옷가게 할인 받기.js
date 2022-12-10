function solution(price) {
    return price < 100000 ? Math.floor(price) : price < 300000 ? Math.floor(price * 0.95) : price < 500000 ? Math.floor(price * 0.9) : Math.floor(price * 0.8);
}