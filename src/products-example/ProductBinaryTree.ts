import { Product } from "./Product";
import { ProductTreeNode } from "./ProductTreeNode";

export class ProductBinaryTree {

    root: ProductTreeNode | null;

    constructor() {
        this.root = null;
    }

    // Insert a new product on the tree, acording the price
    insert(product: Product): void {
        const newNode = new ProductTreeNode(product);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: ProductTreeNode, newNode: ProductTreeNode): void {
        if (newNode.product.price < node.product.price) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Search for products by price
    search(price: number): Product | null {
        return this.searchNode(this.root, price);
    }

    private searchNode(node: ProductTreeNode | null, price: number): Product | null {
        if (node === null) {
            return null;
        }

        if (price < node.product.price) {
            return this.searchNode(node.left, price);
        } else if (price > node.product.price) {
            return this.searchNode(node.right, price);
        } else {
            return node.product; // Product found 
        }
    }

    // Show products in ascending price order (In-order traversal)
    listProductsInOrder(): void {
        this.inOrderTraversal(this.root);
    }

    private inOrderTraversal(node: ProductTreeNode | null): void {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(`${node.product.name} - $${node.product.price}`);
            this.inOrderTraversal(node.right);
        }
    }
}