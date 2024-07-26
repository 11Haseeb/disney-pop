import React from "react";

export default function WhatsNew(props) {
  const { customStyle1, customStyle2 } = props;

  return (
    <div>
      <h3 className="py-3 t-text-2xl">Updates</h3>

      <div style={customStyle1} className="p-2">
        <p className="py-3">
          Check out what's new in our latest version.So, you may know about aur
          services and discounts!
        </p>
        <button
          aria-controls="offcanvasTop"
          className="btn btn-dark btn-sm mb-1"
          data-bs-target="#offcanvasTop"
          data-bs-toggle="offcanvas"
          type="button"
        >
          Check Now!
        </button>
        <div
          aria-labelledby="offcanvasTopLabel"
          className="offcanvas offcanvas-top"
          id="offcanvasTop"
          tabIndex="-1"
          style={customStyle2}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title t-text-2xl" id="offcanvasTopLabel">
              New Version
            </h5>
            <button
              aria-label="Close"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              type="button"
            />
          </div>
          <div className="offcanvas-body">
            <p>
              The new version of your app introduces a sleek and intuitive
              interface designed to enhance user experience with a focus on
              technology and innovation. Featuring a modern dark-themed navbar
              with white text and a striking blue background, the app ensures
              easy navigation across various sections. The homepage now includes
              six dynamic joke boxes, each representing a different category
              like Tech, Programming, AI, Innovation, Science, and Engineering.
              Users can enjoy a fresh joke from any category with a simple
              click. Enhanced search functionality allows users to quickly find
              content relevant to their interests. Additional improvements
              include a responsive design for optimal viewing on any device, a
              detailed About section, and a user-friendly Contact form. With
              these updates, your app not only looks better but also offers a
              more engaging and efficient way for users to explore and interact
              with the content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
