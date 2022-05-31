function solution(arr) {
    let isDone = false;
    let lcm = 1;
    while (!isDone) {
        let count = 0;
        arr.forEach(num => {
            if (lcm % num === 0) count++
        })
        if (count === arr.length) {
            isDone = true;
            return lcm;
        }
        lcm++;
    }
}