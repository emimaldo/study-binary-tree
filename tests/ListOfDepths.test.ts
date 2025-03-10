import { LinkedList } from "../src/LinkedList.ts";
import { ListOfDepths } from "../src/list-of-depths/ListOfDepths.ts";
import { TreeNode } from "../src/TreeNode.ts";

describe('List of Depths', () => {
    let listOfDepths: ListOfDepths;

    beforeEach(() => {
        listOfDepths = new ListOfDepths();
    });

    test('getListOfDepths', () => {
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

        let result: LinkedList<LinkedList<TreeNode<number>>> = listOfDepths.getListOfDepths(root);

        let iterator = result[Symbol.iterator]();
        let level = 0;
        let currentLevel = iterator.next();

        while (!currentLevel.done) {
            let levelList = currentLevel.value;
            expect(levelList.size()).toBe(2 ** level);  // Number of nodes in this level

            // Verificar los valores de los nodos en este nivel
            let levelIterator = levelList[Symbol.iterator]();
            let levelCurrent = levelIterator.next();
            while (!levelCurrent.done) {
                console.log(`Level ${level}: ${levelCurrent.value.value}`);
                levelCurrent = levelIterator.next();
            }

            currentLevel = iterator.next();
            level++;
        }
    });
});
