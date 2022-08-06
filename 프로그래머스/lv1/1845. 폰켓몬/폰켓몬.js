function solution(nums) {
    let result = new Set(nums);
    let max = nums.length / 2;
    
    return result.size < max ? result.size : max
}