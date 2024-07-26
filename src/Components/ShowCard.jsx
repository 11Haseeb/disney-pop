import React from "react";

export default function ShowCard(props) {
  const { imageUrl, name, sourceUrl, id, customStyle2 } = props;

  return (
    <div className="card mb-3" id={`card-${id}`} style={customStyle2}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            alt="..."
            className="img-fluid rounded-start w-100"
            src={imageUrl}
            style={{ height: "200px" }}
          />
        </div>

        <div className="col-md-8 t-relative pb-5">
          <div className="card-body">
            <h5 className="card-title">
              <b>Title: </b>
              {name}
            </h5>

            <a
              href={sourceUrl}
              className="btn btn-primary btn-sm mt-5 t-absolute t-bottom-[0.5rem]"
              target="_blank"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
                               