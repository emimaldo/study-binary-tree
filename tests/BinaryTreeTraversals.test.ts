import { BinaryTreeTraversals } from "../src/traversals/BinaryTreeTraversals.ts";
import { TreeNode } from "../src/TreeNode.ts";

describe('BinaryTreeTraversals', () => {
    let binaryTreeTraversals: BinaryTreeTraversals; 

    beforeEach(() => {
        binaryTreeTraversals = new BinaryTreeTraversals();
    });
    test('inOrder', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5); 
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(7);
        console.log('InOrder Traversal');
        BinaryTreeTraversals.inOrder(root);
        console.log('End of InOrder Traversal');
    });
    test('preOrder', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5); 
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(7);
        console.log('PreOrder Traversal');
        BinaryTreeTraversals.preOrder(root);
        console.log('End of PreOrder Traversal');
    });
    test('postOrder', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5); 
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(7);
        console.log('PostOrder Traversal');
        BinaryTreeTraversals.postOrder(root);
        console.log('End of PostOrder Traversal');
    });
});