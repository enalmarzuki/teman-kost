import React from "react";
import Button from "../../../components/atoms/Button";

import Success from "../../../assests/img/icon/success.png";

import "./SuccessPage.scss";

export default function index(props) {
  console.log(props);
  return (
    <div className="success-page">
      <div className="container container-success-page">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <h2 className="text-center font-weight-bold">
              Yay! Informasi Penyewa
              <br />
              Sudah Berhasil Di Input
            </h2>
            <img
              src={Success}
              alt="success"
              className="icon-success img-fluid"
            />
            <p className="text-secondary text-center font-weight-bold mt-3">
              Kami akan memberitahu Anda melalui whatsapp
              <br />
              jika pemilik menyetujui transaksi anda.
            </p>

            <div className="d-flex justify-content-center mt-4">
              <Button
                type="link"
                className="btn py-2 px-5"
                isPrimary
                hasShadow
                href="/"
              >
                Kembali
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
