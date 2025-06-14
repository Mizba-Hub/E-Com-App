import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div
        className="collapse"
        id="navbarToggleExternalContent"
        data-bs-theme="dark"
      >
        <div className="bg-dark p-4">
          <h5 className="text-body-emphasis h4">Hello User,</h5>
          <span className="text-body-secondary">
            You are on amazon.com. You can also shop on Amazon India for
            millions of products with fast local delivery.
          </span>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="btn btn-outline-secondary" href="#" role="button">
            Today's Deal
          </a>
          <a className="btn btn-outline-secondary" href="#" role="button">
            Customer Service
          </a>
          <a className="btn btn-outline-secondary" href="#" role="button">
            Prime video
          </a>
          <a className="btn btn-outline-secondary" href="#" role="button">
            Buy Again
          </a>
          <a className="btn btn-outline-secondary" href="#" role="button">
            Registry
          </a>
          <a className="btn btn-outline-secondary" href="#" role="button">
            Gift Cards
          </a>
          <a className="btn btn-outline-secondary" href="#" role="button">
            Sell
          </a>
        </div>
      </nav>

      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src="https://rukminid2.flixcart.com/fk-p-flap/1620/270/image/04582568ec2b7d2d.jpg?q=20"
              alt="banner 1"
              width={1600}
              height={270}
              priority
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="https://rukminid2.flixcart.com/fk-p-flap/1620/270/image/14eb0fb178248c58.jpg?q=20"
              alt="banner 2"
              width={1600}
              height={270}
              priority
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="https://rukminid2.flixcart.com/fk-p-flap/1620/270/image/019bcd192207c657.jpeg?q=20"
              alt="banner 3"
              width={1600}
              height={270}
              priority
              className="d-block w-100"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container my-5">
        <h4 className="mb-4">👑 Best Offers Only for You</h4>
        <div className="row row-cols row-cols-md-5 g-4">
          <div className="col">
            <div className="card h-100">
              <Link href="/products">
                <Image
                  src="https://m.media-amazon.com/images/I/61A8cLla92L._AC_UY327_FMwebp_QL65_.jpg"
                  alt="Offer 1"
                  width={300}
                  height={200}
                  className="card-img-top"
                  style={{ objectFit: "cover" }}
                />
              </Link>
              <div
                className="card-body"
                style={{ height: "120px", overflow: "hidden" }}
              >
                <h5 className="card-title">Mega Electronics Sale</h5>
                <p className="card-text">
                  Up to 50% off on Headsets, TVs, Laptops, and more.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <Link href="/products">
                <Image
                  src="https://m.media-amazon.com/images/I/71AMHOB8XpL._AC_SX569_.jpg"
                  alt="Offer 2"
                  width={300}
                  height={200}
                  className="card-img-top"
                  style={{ objectFit: "cover" }}
                />
              </Link>
              <div
                className="card-body"
                style={{ height: "120px", overflow: "hidden" }}
              >
                <h5 className="card-title">Buy 1 Get 1 Free</h5>
                <p className="card-text">On selected fashion brands.</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <Link href="/products">
                <Image
                  src="https://m.media-amazon.com/images/I/61wxTEOre0L._AC_UL480_FMwebp_QL65_.jpg"
                  width={300}
                  height={200}
                  className="card-img-top"
                  style={{ objectFit: "cover" }}
                  alt={"offer 3"}
                />
              </Link>
              <div
                className="card-body"
                style={{ height: "120px", overflow: "hidden" }}
              >
                <h5 className="card-title">Extra 10% Off</h5>
                <p className="card-text">On grocery with credit cards.</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <Link href="/products">
                <Image
                  src="https://m.media-amazon.com/images/I/71+i2Fg5dUL._AC_UL480_QL65_.jpg"
                  width={300}
                  height={200}
                  className="card-img-top"
                  style={{ objectFit: "cover" }}
                  alt={"offer 4"}
                />
              </Link>
              <div
                className="card-body"
                style={{ height: "120px", overflow: "hidden" }}
              >
                <h5 className="card-title">Only ₹499/-</h5>
                <p className="card-text">Tops, Kurtas & More.</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <Link href="/products">
                <Image
                  src="https://m.media-amazon.com/images/I/51wPg3FjOpL._AC_UL480_QL65_.jpg"
                  width={300}
                  height={200}
                  className="card-img-top"
                  style={{ objectFit: "cover" }}
                  alt={"offer 5"}
                />
              </Link>
              <div
                className="card-body"
                style={{ height: "120px", overflow: "hidden" }}
              >
                <h5 className="card-title">Min 70% off</h5>
                <p className="card-text">Collect Books With Min 70% Off.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
