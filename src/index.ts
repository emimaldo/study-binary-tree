import { Product } from "./products-example/Product.js";
import { ProductBinaryTree } from "./products-example/ProductBinaryTree.js";

const productTree = new ProductBinaryTree();

// Insert products
productTree.insert(new Product("Laptop", 1000));
productTree.insert(new Product("Phone", 700));
productTree.insert(new Product("Tablet", 400));
productTree.insert(new Product("Headphones", 100));
productTree.insert(new Product("Smartwatch", 300));

// Search for a product by price
const searchedProduct = productTree.search(700);
if (searchedProduct) {
  console.log(`Product found: ${searchedProduct.name} - $${searchedProduct.price}`);
} else {
  console.log("Product not found");
}

// List products by ascending price order
console.log("Product list by ascending prrice order:");
productTree.listProductsInOrder();