import { TreeNode } from '../src/TreeNode.ts';
import { ValidateBst } from '../src/validate-bst/ValidateBst.ts';

describe('Validate Bst', () => {
    let validateBst: ValidateBst;

    beforeEach(() => {
        validateBst = new ValidateBst();
    });

    test('isValidBst - valid BST', () => {
        let root = new TreeNode<number>(2);
        root.left = new TreeNode<number>(1);
        root.right = new TreeNode<number>(3);

        let result: boolean = validateBst.isValidBst(root);

        expect(result).toBe(true);
    });

    test('isValidBst - invalid BST with right subtree', () => {
        let root = new TreeNode<number>(5);
        root.left = new TreeNode<number>(1);
        root.right = new TreeNode<number>(4);
        root.right.left = new TreeNode<number>(3);
        root.right.right = new TreeNode<number>(6);

        let result: boolean = validateBst.isValidBst(root);

        expect(result).toBe(false);
    });

    test('isValidBst - invalid BST with duplicate left child', () => {
        let root = new TreeNode<number>(1);
        root.left = new TreeNode<number>(1);

        let result: boolean = validateBst.isValidBst(root);

        expect(result).toBe(true);
    });

    test('isValidBst - invalid BST with invalid right subtree', () => {
        let root = new TreeNode<number>(10);
        root.left = new TreeNode<number>(5);
        root.right = new TreeNode<number>(15);
        root.right.left = new TreeNode<number>(6);
        root.right.right = new TreeNode<number>(20);

        let result: boolean = validateBst.isValidBst(root);

        expect(result).toBe(false);
    });
});