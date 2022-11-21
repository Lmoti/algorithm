function solution(cacheSize, cities) {
    let answer = 0;
    let arr = [];
    for (let city of cities) {
        if (cacheSize === 0) return cities.length * 5;
        if (arr.length < cacheSize) {
            if (!arr.includes(city.toLowerCase())) {
                arr.push(city.toLowerCase());
                answer += 5;
            } else {
                arr.splice(arr.indexOf(city.toLowerCase()), 1);
                arr.push(city.toLowerCase());
                answer++;
            }
            
        } else {
            if (!arr.includes(city.toLowerCase())) {
                arr = arr.slice(1);
                arr.push(city.toLowerCase());
                answer += 5;
            } else {
                arr.splice(arr.indexOf(city.toLowerCase()), 1);
                arr.push(city.toLowerCase());
                answer++;
            }
        }
    }
    return answer;
}