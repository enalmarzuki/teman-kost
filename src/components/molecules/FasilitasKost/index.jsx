import React from "react";
import "./FasilitasKost.scss";

export default function index(props) {
  const { images } = props;

  return (
    <div className="container container-fasilitas-kost mt-4">
      <div className="row">
        {images.map((image, index) => {
          return (
            <div className="col" key={index}>
              <div className="fasilitas-image-wrapper d-flex justify-content-center mb-3">
                <img
                  src={image.image}
                  alt="wifi"
                  style={{
                    width: "50px",
                  }}
                />
              </div>
              <h4 className="font-weight-bold text-center">{image.name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
