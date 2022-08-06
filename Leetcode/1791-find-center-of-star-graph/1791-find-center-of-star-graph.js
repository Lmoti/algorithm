/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const nums = {};
    let centerNum = 0;
    let numcount = 0;
    for (let edge of edges) {
        for (let i = 0; i <= 1; i++) {
            if (!nums[edge[i]]) nums[edge[i]] = 1;
            else nums[edge[i]]++;
            if (nums[edge[i]] > numcount) {
                numcount = nums[edge[i]];
                centerNum = edge[i];
            }
        }
    }
    console.log(nums)
    return centerNum;
    
};