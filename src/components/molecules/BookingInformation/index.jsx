import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../../components/atoms/Button";

import LogoBca from "../../../assests/img/image/logo-bca.jpg";
import LogoMandiri from "../../../assests/img/image/logo-mandiri.jpg";

import "./BookingInformation.scss";

export default function BookingInformation(props) {
  const { location } = props;
  const { register, handleSubmit, errors } = useForm();

  const onsubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container container-checkout-page">
      <div className="row mb-5">
        <div
          className="col-md-7 border-right col-checkout-information"
          style={{ paddingRight: 80 }}
        >
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <h5 className="text-secondary">Biaya Sewa</h5>
                </td>
                <td>
                  <h5 className="font-weight-bold">
                    {location.state.data.hargaSewa}
                  </h5>
                </td>
              </tr>

              <tr>
                <td>
                  <h5 className="text-secondary">Biaya Admin</h5>
                </td>
                <td>
                  <h5 className="font-weight-bold">
                    {location.state.data.biayaAdmin}
                  </h5>
                </td>
              </tr>

              <tr>
                <td>
                  <h5 className="text-secondary">Total</h5>
                </td>
                <td>
                  <h2 className="font-weight-bold">
                    {location.state.data.total}
                  </h2>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="opsi-transfer">
            <div className="opsi-transfer-wrapper">
              <div className="logo-bank">
                <img src={LogoBca} alt="Bank Central Asia" width="60" />
              </div>
              <div className="desc-bank ml-4">
                <h5>Bank Central Asia</h5>
                <h5>4567 1996</h5>
                <h5>Jayusman Septiadi</h5>
              </div>
            </div>

            <div className="opsi-transfer-wrapper">
              <div className="logo-bank">
                <img src={LogoMandiri} alt="Bank Central Asia" width="60" />
              </div>
              <div className="desc-bank ml-4">
                <h5>Bank Mandiri</h5>
                <h5>4567 1996</h5>
                <h5>Jayusman Septiadi</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-5 col-checkout-form" style={{ paddingLeft: 80 }}>
          <form>
            <label htmlFor="namaLengkap">Nama Lengkap *</label>
            <input
              className="form-control form-control-lg mb-4"
              type="text"
              id="namaLengkap"
              name="namaLengkap"
              placeholder="Ketik Nama Lengkap"
              ref={register({ required: "Nama Lengkap Harus Di Isi" })}
            />
            {errors.namaLengkap && (
              <p className="error">{errors.namaLengkap.message}</p>
            )}

            <label htmlFor="nomorTelpon">Nomor Telpon *</label>
            <input
              className="form-control form-control-lg mb-4"
              type="text"
              id="nomorTelpon"
              name="nomorTelpon"
              placeholder="Ketik Nomor Telpon"
              ref={register({ required: true })}
            />
            {errors.nomorTelpon && (
              <p className="error">Nomor Telpon Harus Di Isi</p>
            )}

            <label htmlFor="fotoKtp">Upload Foto KTP *</label>
            <input
              className="form-control form-control-lg mb-4"
              type="file"
              id="fotoKtp"
              name="fotoKtp"
              ref={register({ required: true })}
            />
            {errors.fotoKtp && <p className="error">Tidak Boleh Kosong</p>}

            <label htmlFor="fotoBuktiPembayaran">
              Upload Bukti Pembayaran *
            </label>
            <input
              className="form-control form-control-lg"
              type="file"
              id="fotoBuktiPembayaran"
              name="fotoBuktiPembayaran"
              ref={register({ required: true })}
            />
            {errors.fotoBuktiPembayaran && (
              <p className="error">Tidak Boleh Kosong</p>
            )}
          </form>
        </div>
      </div>

      <div className="row justify-content-center row-button-checkout-page">
        <div className="col-md-3">
          <Button
            type="button"
            className="btn font-weight-bold mb-3 py-2"
            isBlock
            isPrimary
            hasShadow
            onClick={handleSubmit(onsubmit)}
          >
            Kirim
          </Button>
          <Button type="button" className="btn py-2" isBlock isLight hasShadow>
            Kembali
          </Button>
        </div>
      </div>
    </div>
  );
}
