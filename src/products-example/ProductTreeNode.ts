import { Product } from "./Product.js";

export class ProductTreeNode {

    product: Product;
    left: ProductTreeNode | null;
    right: ProductTreeNode | null;

    constructor(product: Product) {
        this.product = product;
        this.left = null;
        this.right = null;
    }
}