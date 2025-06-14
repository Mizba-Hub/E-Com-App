import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function ContactUs() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Contact-page</title>
      </Head>

      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div
          className="w-100 p-4 border rounded shadow"
          style={{ maxWidth: "600px" }}
        >
          <h2 className="text-center mb-4">Contact Us</h2>

          <form>
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="name@example.com"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="subjectSelect" className="form-label">
                Subject
              </label>
              <select className="form-select" id="subjectSelect">
                <option value="">Select a subject</option>
                <option value="return">Return Policy</option>
                <option value="track">Track Order</option>
                <option value="help">Help</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="messageTextarea" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="messageTextarea"
                rows={4}
                placeholder="Type your message here..."
              />
            </div>

            <button
              className="btn btn-primary w-100"
              type="button"
              onClick={() => router.push("/")}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
