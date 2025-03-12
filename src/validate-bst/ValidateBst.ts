import { TreeNode } from '../TreeNode.ts';
export class ValidateBst 
{
    isValidBst (root: TreeNode<number>): boolean 
    {
        return this.isValidBstHelper(root, null, null);
    }

    private isValidBstHelper (root: TreeNode<number> | null, min: number | null, max: number | null): boolean
    {
        if (root === null) return true;
        if ((min != null && root.value <= min) || (max != null && root.value > max)) return false;

        return this.isValidBstHelper(root.left, min, root.value) && this.isValidBstHelper(root.right, root.value, max);
    }
}