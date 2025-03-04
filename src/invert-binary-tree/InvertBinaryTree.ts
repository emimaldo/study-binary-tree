import { TreeNode } from "../TreeNode.ts";

export class InvertBinaryTree 
{

    invertTree(root: TreeNode<number> | null): TreeNode<number> | null {
        if (root == null) return null;

        const tmp = root.left;
        root.left = root.right;
        root.right = tmp;

        this.invertTree(root.left);
        this.invertTree(root.right);

        return root;
    }
}