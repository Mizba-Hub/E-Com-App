import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Login() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Login-page</title>
      </Head>

      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div
          className="w-100 p-4 border rounded shadow"
          style={{ maxWidth: "600px" }}
        >
          <form style={{ backgroundColor: "rgb(205, 201, 201)" }}>
            <div className="form-group my-3">
              <label htmlFor="exampleInputName">Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                aria-describedby="NameHelp"
              />
            </div>

            <div className="form-group my-3">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>

            <div className="form-group my-3">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
              <span id="passwordHelpInline" className="form-text">
                Must be 8-20 characters long.
              </span>
            </div>

            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Address
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
              ></textarea>
            </div>

            <div className="d-flex">
              <div className="col-auto">
                <label htmlFor="inputText" className="col-form-label">
                  City
                </label>
              </div>
              <div className="col-auto mx-3">
                <input
                  type="text"
                  id="inputText"
                  className="form-control"
                  aria-describedby="textHelpInline"
                />
              </div>

              <div className="col-auto mx-3">
                <label htmlFor="inputText" className="col-form-label">
                  State
                </label>
              </div>
              <select className="form-select" defaultValue="">
                <option value="" disabled>
                  Choose your State
                </option>
                <option value="kerala">Kerala</option>
                <option value="tamilnadu">Tamil Nadu</option>
                <option value="karnataka">Karnataka</option>
              </select>
            </div>

            <div className="form-group form-check my-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember Me
              </label>
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-primary me-2"
                onClick={() => router.push("/")}
              >
                Submit
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={goBack}
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
