import Head from "next/head";
import { useCart } from "./Context/CartContext";
import Image from "next/image";

export default function CartClient() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container py-4">
      <Head>
        <title>Cart-Page</title>
        <meta name="description" content="View items in your cart" />
      </Head>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((product) => (
          <div key={product.id} className="card mb-3 shadow-sm">
            <div className="row g-0">
              <div
                className="col-md-4 d-flex justify-content-center align-items-center"
                style={{ maxHeight: "200px" }}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={150}
                  height={150}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text text-muted">${product.price}</p>
                  <p className="card-text">{product.description}</p>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
