import styles from "./ProductCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../Types/index";
import { useCart } from "../../Context/CartContext";
import { useState } from "react";
import slugify from "slugify";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
  };

  const slug = slugify(product.title, { lower: true });

  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <Link href={`/products/${slug}`}>
          <div
            className={styles["product-image"]}
            style={{ height: "250px", width: "100%" }}
          >
            <Image
              src={product.image}
              alt={product.title}
              fill
              style={{ objectFit: "contain" }}
              className="p-3"
            />
          </div>
        </Link>

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text text-muted">
            <b>Price: ${product.price}</b>
          </p>

          <button
            onClick={handleAddToCart}
            className={`btn mt-auto ${added ? "btn-success" : "btn-warning"}`}
          >
            {added ? "Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
