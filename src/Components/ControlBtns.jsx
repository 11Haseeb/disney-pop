import React from "react";

export default function ControlBtns(props) {
  const { page, prevPage, nextPage } = props;

  const goToTop = () => {
    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
  };

  return (
    <div className="t-flex t-justify-between mt-5">
      <button
        className="btn btn-dark"
        onClick={() => {
          prevPage();
          goToTop();
        }}
        disabled={page === 1}
      >
        &#8592; Prev
      </button>

      <button
        className="btn btn-dark"
        onClick={() => {
          nextPage();
          goToTop();
        }}
      >
        Next &#8594;
      </button>
    </div>
  );
}
