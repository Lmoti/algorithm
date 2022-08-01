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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let answer = new TreeNode();
    let current = answer;
    
    const traverse = (node) => {
        if (node.left) traverse(node.left);
        current.right = node;
        node.left = null;
        current = current.right;
        if (node.right) traverse(node.right);
    }
    traverse(root);
    return answer.right;
};