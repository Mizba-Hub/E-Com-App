import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ProductsService } from "../../pages/Services/Product-services";
import Image from "next/image";
import { useCart } from "../../pages/Context/CartContext";
import slugify from "slugify";

export default function ProductDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    if (!router.isReady) return;

    ProductsService.getProducts().then((products) => {
      const match = products.find(
        (p: { title: string }) => slugify(p.title, { lower: true }) === slug
      );
      setProduct(match || null);
      setLoading(false);
    });
  }, [slug, router.isReady]);

  if (loading) return <p className="text-center mt-5">Loading...</p>;

  if (!product)
    return <p className="text-center mt-5 text-danger">Product not found.</p>;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });
    setAddedToCart(true);
  };

  const goBack = () => router.back();

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 text-center">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h4>Price: ₹{product.price}</h4>

          <button
            className={`btn mt-3 ${
              addedToCart ? "btn-success" : "btn-warning"
            }`}
            onClick={handleAddToCart}
          >
            {addedToCart ? "Added" : "Add to Cart"}
          </button>

          <button className="btn btn-secondary mt-3 ms-3" onClick={goBack}>
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}
