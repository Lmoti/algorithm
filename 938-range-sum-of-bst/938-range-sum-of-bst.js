/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum = 0;
    const helper = (root, low, high) => {
        if (root === null) return null;
        if (root.val >= low && root.val <= high) {
            sum += root.val;
            helper(root.left, low, high);
            helper(root.right, low, high);
        }
        if (root.val < low) {
            helper(root.right, low, high);
        }
        if (root.val > high) {
            helper(root.left, low, high);
        }
    };
    helper(root, low, high);
    return sum;
};

// var rangeSumBST = function(root, low, high) {
//     let sum = 0;
//     const helper = (root, low, high) => {
//         if (root === null) return null;
//         if (root.val >= low && root.val <= high) {
//             sum += root.val;
//         }
//         if (root.val > low) {
//             helper(root.left, low, high);
//         }
//         if (root.val < high) {
//             helper(root.right, low, high);
//         }
//     };
//     helper(root, low, high);
//     return sum;
// };