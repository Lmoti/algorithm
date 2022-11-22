function solution(numlist, n) {
    let arr = [...numlist];
    arr = [...numlist.map((el) => el - n)];
    arr.sort((a, b) => Math.abs(a) - Math.abs(b));
    console.log(arr);
    arr = arr.map((el) => el + n);
    arr.sort((a, b) => {
        if (Math.abs(a - n) === Math.abs(b - n)) {
            return b - a;
        }
    })
    return arr;
}