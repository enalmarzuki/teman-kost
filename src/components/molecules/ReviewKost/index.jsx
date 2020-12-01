import React from "react";
import Star from "../../../components/atoms/Star";

export default function index() {
  return (
    <div className="container container-review-kost mt-4">
      <div className="row mb-5 justify-content-between">
        <div className="col-md-3 ">
          <h4>Kebersihan</h4>
          <Star value={4.1} height={45} width={45} spacing={4}></Star>
        </div>

        <div className="col-md-3">
          <h4>Keamanan</h4>
          <Star value={4.7} height={45} width={45} spacing={4}></Star>
        </div>

        <div className="col-md-3">
          <h4>Kenyamanan</h4>
          <Star value={5} height={45} width={45} spacing={4}></Star>
        </div>
      </div>

      <div className="row justify-content-between">
        <div className="col-md-3">
          <h4>Fasilitas Kamar</h4>
          <Star value={4.8} height={45} width={45} spacing={4}></Star>
        </div>

        <div className="col-md-3">
          <h4>Fasilitas Bersama</h4>
          <Star value={4.3} height={45} width={45} spacing={4}></Star>
        </div>

        <div className="col-md-3">
          <h4>Harga</h4>
          <Star value={4} height={45} width={45} spacing={4}></Star>
        </div>
      </div>
    </div>
  );
}
