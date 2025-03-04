import { TreeNode } from "../TreeNode.ts";

export class BinaryTreeTraversals 
{
    static inOrder<T>(node: TreeNode<T> | null): void {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }

    static preOrder<T>(node: TreeNode<T> | null): void {
        if (node !== null) {
            console.log(node.value);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    static postOrder<T>(node: TreeNode<T> | null): void {
        if (node !== null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.value);
        }
    }
}