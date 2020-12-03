import React from "react";

import Button from "../../atoms/Button";

import "./ChooseRoom.scss";

export default function index(props) {
  const { data } = props;
  return (
    <div className="container container-pilihan-kamar">
      <div className="row mt-4">
        {data.map((kamarTersedia, index) => {
          return (
            <div className="col-md-4" key={index}>
              <div className="detail-kost-kamar">
                <img
                  src={kamarTersedia.image}
                  alt={`Kamar Tersedia ${index}`}
                />
                <div className="detail-kost-text-hover">
                  <h4 className="font-weight-bold mb-1 text-center text-white">
                    Tersedia {kamarTersedia.tersedia} Kamar
                  </h4>
                  <Button
                    type="link"
                    href={`/detail-kamar/${kamarTersedia._id}`}
                    className="stretched-link text-center text-white h5"
                  >
                    Klik Untuk Detail
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
