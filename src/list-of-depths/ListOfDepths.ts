import { LinkedList } from "../LinkedList.ts";
import { TreeNode } from "../TreeNode.ts";

export class ListOfDepths {
    getListOfDepths<T>(root: TreeNode<T>): LinkedList<LinkedList<TreeNode<T>>> {
        let result = new LinkedList<LinkedList<TreeNode<T>>>();
        let currentLevel = new LinkedList<TreeNode<T>>();

        if (root) {
            currentLevel.append(root);
        }

        while (currentLevel.size() > 0) {
            result.append(currentLevel);
            let parents = currentLevel;
            currentLevel = new LinkedList<TreeNode<T>>();

            for (let node of parents) {
                if (node.left) {
                    currentLevel.append(node.left);
                }
                if (node.right) {
                    currentLevel.append(node.right);
                }
            }
        }

        return result;
    }
}
