import { MaximumDepth } from "../src/MaxDepth/MaximumDepth.ts";
import { TreeNode } from "../src/TreeNode.ts";

describe('Maximum Depth', () => {
    let maximumDepth: MaximumDepth;

    beforeEach(() => {
        maximumDepth = new MaximumDepth();
    });

    test('getMaximumDepth', () => {
        let root: TreeNode<number> = new TreeNode<number>(1);
        root.left = new TreeNode<number>(2);
        root.right = new TreeNode<number>(3);
        root.left.left = new TreeNode<number>(4);
        root.left.right = new TreeNode<number>(5);
        root.right.left = new TreeNode<number>(6);
        root.right.right = new TreeNode<number>(7);
        root.left.left.left = new TreeNode<number>(8);
        root.left.left.right = new TreeNode<number>(9);
        root.left.right.left = new TreeNode<number>(10);
        root.left.right.right = new TreeNode<number>(11);
        root.right.left.left = new TreeNode<number>(12);
        root.right.left.right = new TreeNode<number>(13);
        root.right.right.left = new TreeNode<number>(14);
        root.right.right.right = new TreeNode<number>(15);

        let result: number = maximumDepth.getMaxDepth(root);

        expect(result).toBe(4);
    });
});