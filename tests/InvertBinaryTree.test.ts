import { InvertBinaryTree } from "../src/invert-binary-tree/InvertBinaryTree.ts";
import { BinaryTreeTraversals } from "../src/traversals/BinaryTreeTraversals.ts";
import { TreeNode } from "../src/TreeNode.ts";

describe ('InvertBinaryTree', () => {
    let invertBinaryTree: InvertBinaryTree; 

    beforeEach(() => {
        invertBinaryTree = new InvertBinaryTree();
    });

    test('invertTree', () => {
        const root = new TreeNode(4);
        root.left = new TreeNode(2);
        root.right = new TreeNode(7);
        root.left.left = new TreeNode(1);
        root.left.right = new TreeNode(3); 
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(9);
        console.log('Original Tree');
        BinaryTreeTraversals.preOrder(root);
        console.log('End of Original Tree');
        const invertedTree = invertBinaryTree.invertTree(root);
        expect(invertedTree).not.toBeNull();
        expect(invertedTree!.value).toBe(4);
        expect(invertedTree!.left).not.toBeNull();
        expect(invertedTree!.left!.value).toBe(7);
        expect(invertedTree!.right).not.toBeNull();
        expect(invertedTree!.right!.value).toBe(2);
        expect(invertedTree!.left!.left).not.toBeNull();
        expect(invertedTree!.left!.left!.value).toBe(9);
        expect(invertedTree!.left!.right).not.toBeNull();
        expect(invertedTree!.left!.right!.value).toBe(6);
        expect(invertedTree!.right!.left).not.toBeNull();
        expect(invertedTree!.right!.left!.value).toBe(3);
        expect(invertedTree!.right!.right).not.toBeNull();
        expect(invertedTree!.right!.right!.value).toBe(1);
        console.log('Inverted Tree');
        BinaryTreeTraversals.preOrder(invertedTree);
        console.log('End of Inverted Tree');
    });
});