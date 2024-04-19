import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";

import Image from "next/image";

export default async function SingleProductPage({ params }) {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image alt="" src={product.img || "/noavatar.png"} fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input type="text" placeholder={product.title} name="title" />
          <label>Price</label>
          <input type="number" placeholder={`$${product.price}`} name="price" />
          <label>Stock</label>
          <input type="number" placeholder={product.stock} name="stock" />
          <label>Color</label>
          <input type="text" placeholder={product.color} name="color" />
          <label>Size</label>
          <textarea type="text" placeholder={product.size} name="size" />
          <label>Category</label>
          <select name="category" id="category" defaultValue={product.category}>
            <option value="phone">Phone</option>
            <option value="laptop">Laptop</option>
          </select>
          <label>Description</label>
          <textarea
            type="text"
            placeholder={product.desc}
            rows={10}
            name="description"
          />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}
