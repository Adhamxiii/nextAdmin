import { addProduct } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

export default async function addProductPage() {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="Product Name" name="title" required />

        <select name="category" id="category">
          <option value="generic" selected disabled hidden>
            Choose a category
          </option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="laptop">Laptop</option>
        </select>
        <input type="number" name="price" id="price" placeholder="Price" />
        <input type="number" name="stock" id="stock" placeholder="Stock" />
        <input type="text" name="color" id="color" placeholder="Color" />
        <input type="text" name="size" id="size" placeholder="Size" />
        <textarea id="desc" name="desc" placeholder="desc" rows={16} />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
