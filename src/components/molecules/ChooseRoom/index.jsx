import React from "react";
import Img3 from "../../../assests/img/image/3.jpg";

import "./ChooseRoom.scss";

export default function index(props) {
  return (
    <div className="container container-pilihan-kamar">
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="detail-kost-kamar">
            <img src={Img3} alt="bgfjhfg" />
            <div className="detail-kost-text-hover">
              <h4 className="font-weight-bold mb-1 text-center text-white">
                Tersedia 4 Kamar
              </h4>
              <h5 className="text-center text-white">Klik Untuk Detail</h5>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="detail-kost-kamar">
            <img src={Img3} alt="bgfjhfg" />
            <div className="detail-kost-text-hover">
              <h4 className="font-weight-bold mb-1 text-center text-white">
                Tersedia 4 Kamar
              </h4>
              <h5 className="text-center text-white">Klik Untuk Detail</h5>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="detail-kost-kamar">
            <img src={Img3} alt="bgfjhfg" />
            <div className="detail-kost-text-hover">
              <h4 className="font-weight-bold mb-1 text-center text-white">
                Tersedia 4 Kamar
              </h4>
              <h5 className="text-center text-white">Klik Untuk Detail</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
