import React, { useState } from "react";
import formatNumber from "../../../utils/formatNumber";

import Button from "../../../components/atoms/Button";

import "./BookingForm.scss";

export default function BookingForm(props) {
  let durasi = 0;

  const [hargaSewa, setHargaSewa] = useState("");
  const [tglMasuk, setTglMasuk] = useState("");
  const [tglKeluar, setTglKeluar] = useState("");
  const [biayaAdmin, setBiayaAdmin] = useState(0);
  const [total, setTotal] = useState(0);

  const [sewaError, setSewaError] = useState(false);
  const [tglMasukError, setTglMasukError] = useState(false);

  const durasiClick = (e) => {
    let harga = 0;

    const waktuSewa = document.querySelectorAll(".form-check-input");

    for (let i = 0; i < waktuSewa.length; i++) {
      if (waktuSewa[i].checked) {
        if (i === 0) {
          harga = 700000;
          durasi = 2628000000;
          setHargaSewa(harga);
        } else if (i === 1) {
          harga = 3500000;
          durasi = 15768000000;
          setHargaSewa(harga);
        } else {
          harga = 7000000;
          durasi = 31536000000;
          setHargaSewa(harga);
        }
        setSewaError(false);
      }

      // Biaya Sewa di Ubah Ke Rupiah
      const biayaSewa = document.querySelector(".biaya-sewa-text");
      biayaSewa.innerHTML = `Rp. ${formatNumber(harga)}`;
    }

    // Biaya admin di Ubah Ke Rupiah
    let admin = 10000;
    setBiayaAdmin(admin);
    const biayaAdmin = document.querySelector(".biaya-admin-text");
    biayaAdmin.innerHTML = `Rp. ${formatNumber(admin)}`;

    // Total Biaya di Ubah Ke Rupiah
    const total = admin + harga;
    setTotal(total);
    const totalBiaya = document.querySelector(".Total-biaya-text");
    totalBiaya.innerHTML = `Rp. ${formatNumber(total)}`;
  };

  const handleClick = (e) => {
    const tglMasuk = e.target.value;
    setTglMasuk(tglMasuk);
    const tglMasuk2 = tglMasuk.split("-");

    const newDate = new Date(
      tglMasuk2[0],
      tglMasuk2[1] - 1,
      tglMasuk2[2]
    ).getTime();

    const timeKeluar = newDate + durasi;
    const tglKeluar = new Date(timeKeluar);
    const fixKeluar = new Intl.DateTimeFormat("en-US").format(tglKeluar);
    setTglKeluar(fixKeluar);
    const outKost = document.querySelector(".tgl-keluar-text");
    outKost.innerHTML = fixKeluar;

    setTglMasukError(false);
  };

  const startBooking = (e) => {
    if (hargaSewa === "") return setSewaError(true);
    if (tglMasuk === "") return setTglMasukError(true);

    const data = {
      tglMasuk,
      tglKeluar,
      hargaSewa,
      biayaAdmin,
      total,
    };
    props.history.push({
      pathname: "/checkout",
      state: { data },
    });
  };

  return (
    <div className="container container-kamar-fasiltas">
      <div className="row">
        <div className="col-md-6">
          {props.data.fasilitasKost.map((fasilitas, index) => {
            return (
              <div className="fasilitas-kost-wrapper" key={index}>
                <img
                  src={fasilitas.image}
                  alt={fasilitas.name}
                  style={{ width: "50px" }}
                />
                <h4 className="text-center mt-3 font-weight-bold">
                  {fasilitas.name}
                </h4>
              </div>
            );
          })}
        </div>

        <div className="col border border-secondary p-5 mb-5 booking-form">
          <h2 className="font-weight-bold text-center mb-4">Mulai Sewa Kost</h2>
          <div className="mb-3">
            <h5 className="font-weight-bold mb-0">Durasi Sewa </h5>
            {sewaError && (
              <span className="error-helper">Silahkan Pilih Durasi Sewa</span>
            )}
          </div>

          <div className="form-check mb-2 ml-4">
            <input
              className="form-check-input"
              type="radio"
              id="perbulan"
              name="durasiSewa"
              onClick={durasiClick}
            />
            <label className="form-check-label" htmlFor="perbulan">
              <span className="font-weight-bold">Rp. 700.000</span> / bulan
            </label>
          </div>

          <div className="form-check mb-2 ml-4">
            <input
              className="form-check-input"
              type="radio"
              id="setengahTahun"
              name="durasiSewa"
              onClick={durasiClick}
            />
            <label className="form-check-label" htmlFor="setengahTahun">
              <span className="font-weight-bold">Rp. 3.500.000</span> / 6 bulan
            </label>
          </div>

          <div className="form-check mb-2 ml-4">
            <input
              className="form-check-input"
              type="radio"
              id="setahun"
              name="durasiSewa"
              onClick={durasiClick}
            />
            <label className="form-check-label" htmlFor="setahun">
              <span className="font-weight-bold">Rp. 7.000.000</span> / tahun
            </label>
          </div>

          <h5 className="font-weight-bold mb-3 mt-5">Tanggal Masuk </h5>
          <input
            type="date"
            name="tanggalMasuk"
            id="tanggalMasuk"
            className="input-date form-control"
            onChange={handleClick}
          />
          {tglMasukError && (
            <span className="error-helper">Silahkan Pilih Tanggal Masuk</span>
          )}

          <h5 className="font-weight-bold mb-3 mt-4">Tanggal Keluar</h5>
          <h5 className="tgl-keluar-text text-right font-weight-bold"> - </h5>

          <h6 className="font-weight-bold mb-3 mt-2 text-secondary">
            Biaya Sewa
          </h6>
          <h5 className="biaya-sewa-text text-right font-weight-bold"> - </h5>

          <h6 className="font-weight-bold mb-3 mt-2 text-secondary">
            Biaya Admin
          </h6>
          <h5 className="biaya-admin-text text-right font-weight-bold">-</h5>

          <h6 className="font-weight-bold mb-3 mt-2 text-secondary">
            Total Biaya
          </h6>
          <h2 className="Total-biaya-text text-right font-weight-bold">-</h2>

          <Button
            className="btn w-100 mt-3 font-weight-bold"
            hasShadow
            isPrimary
            isBlock
            onClick={startBooking}
          >
            Lanjutkan
          </Button>
        </div>
      </div>
    </div>
  );
}
