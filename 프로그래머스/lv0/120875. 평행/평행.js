function solution(dots) {
    let answer = false;
    if (helper(dots[0], dots[1]) === helper(dots[2], dots[3])) answer = true;
    if (helper(dots[0], dots[2]) === helper(dots[1], dots[3])) answer = true;
    if (helper(dots[0], dots[3]) === helper(dots[1], dots[2])) answer = true;
    return answer ? 1 : 0;
}
function helper (arr1, arr2) {
    return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
}