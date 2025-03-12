import { TreeNode } from "../TreeNode.ts";

export class MaximumDepth
{
    getMaxDepth(root: TreeNode<number> | null): number 
    {
        if (!root) 
        {
            return 0;
        }

        let left = this.getMaxDepth(root.left);
        let right = this.getMaxDepth(root.right);

        return Math.max(left, right) + 1;
    }
}