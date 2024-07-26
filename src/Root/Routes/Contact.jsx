import React from "react";

export default function Contact(props) {
  const { customStyle1 } = props;

  return (
    <div className="container my-5">
      <h3 className="pb-4 t-text-3xl">
        <strong>Contact Us</strong>
      </h3>

      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label" htmlFor="inputEmail4">
            Email
          </label>
          <input
            className="form-control"
            id="inputEmail4"
            type="email"
            style={customStyle1}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="inputPassword4">
            Password
          </label>
          <input
            className="form-control"
            id="inputPassword4"
            type="password"
            style={customStyle1}
          />
        </div>
        <div className="col-12">
          <label className="form-label" htmlFor="inputAddress">
            Address
          </label>
          <input
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            type="text"
            style={customStyle1}
          />
        </div>
        <div className="col-12">
          <label className="form-label" htmlFor="inputAddress2">
            Address 2
          </label>
          <input
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
            type="text"
            style={customStyle1}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="inputCity">
            City
          </label>
          <input
            className="form-control"
            id="inputCity"
            type="text"
            style={customStyle1}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label" htmlFor="inputState">
            State
          </label>
          <select className="form-select" id="inputState" style={customStyle1}>
            <option selected>Choose...</option>
            <option className="pakistan">Pakistan</option>
            <option value="palestine">Palestine</option>
            <option value="iraq">Iraq</option>
            <option value="iran">Iran</option>
          </select>
        </div>
        <div className="col-md-2">
          <label className="form-label" htmlFor="inputZip">
            Zip
          </label>
          <input
            className="form-control"
            id="inputZip"
            type="text"
            style={customStyle1}
          />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              id="gridCheck"
              type="checkbox"
              style={customStyle1}
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
