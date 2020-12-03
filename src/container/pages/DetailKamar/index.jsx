import React from "react";

import Header from "../../../components/molecules/Header";
import HeroDetailKamar from "../../../components/molecules/HeroDetailKamar";
import TitleSection from "../../../components/atoms/TitleSection";
import Button from "../../../components/atoms/Button";

import Img3 from "../../../assests/img/image/3.jpg";
import wifi from "../../../assests/img/icon/wifi.png";
import ruang_kerja from "../../../assests/img/icon/ruang_kerja.png";
import ac from "../../../assests/img/icon/ac.png";
import parkir from "../../../assests/img/icon/parkir.png";

import "./DetailKamar.scss";

export default function index(props) {
  const detailKamar = {
    hero: {
      image: Img3,
      kost: "Kost Putri Mustafa",
      alamat: "Jl. Sultan Alauddin",
    },

    fasilitasKost: [
      { name: "Wifi", image: wifi },
      { name: "Ruang Kerja", image: ruang_kerja },
      { name: "AC", image: ac },
      { name: "Parkir", image: parkir },
    ],
  };

  const handleClick = (e) => {
    let harga = 0;
    let durasi = 0;

    const waktuSewa = document.querySelectorAll(".form-check-input");

    for (let i = 0; i < waktuSewa.length; i++) {
      if (waktuSewa[i].checked) {
        if (i === 0) {
          harga = 700000;
          durasi = 2628000000;
        } else if (i === 1) {
          harga = 3500000;
          durasi = 15768000000;
        } else {
          harga = 7000000;
          durasi = 31536000000;
        }
      }

      // Biaya Sewa di Ubah Ke Rupiah
      const biayaSewa = document.querySelector(".biaya-sewa-text");

      let reverse = harga.toString().split("").reverse().join(""),
        ribuan = reverse.match(/\d{1,3}/g);
      ribuan = ribuan.join(".").split("").reverse().join("");
      biayaSewa.innerHTML = `Rp. ${ribuan}`;
    }

    // Biaya admin di Ubah Ke Rupiah
    let admin = 10000;
    const biayaAdmin = document.querySelector(".biaya-admin-text");

    let adminFormatRp = admin.toString().split("").reverse().join(""),
      rupiahFormatAdmin = adminFormatRp.match(/\d{1,3}/g);
    rupiahFormatAdmin = rupiahFormatAdmin
      .join(".")
      .split("")
      .reverse()
      .join("");
    biayaAdmin.innerHTML = `Rp. ${rupiahFormatAdmin}`;

    // Total Biaya di Ubah Ke Rupiah
    const total = admin + harga;
    const totalBiaya = document.querySelector(".Total-biaya-text");

    let totalBiayaRupiah = total.toString().split("").reverse().join(""),
      biayaTotalRupiah = totalBiayaRupiah.match(/\d{1,3}/g);
    biayaTotalRupiah = biayaTotalRupiah.join(".").split("").reverse().join("");
    totalBiaya.innerHTML = `Rp. ${biayaTotalRupiah}`;

    console.log(harga);

    const tglMasuk = e.target.value;
    const tglMasuk2 = tglMasuk.split("-");

    const newDate = new Date(
      tglMasuk2[0],
      tglMasuk2[1] - 1,
      tglMasuk2[2]
    ).getTime();

    const timeKeluar = newDate + durasi;
    const tglKeluar = new Date(timeKeluar);
    const fixKeluar = new Intl.DateTimeFormat("en-US").format(tglKeluar);

    console.log(newDate);
    console.log(fixKeluar);

    const outKost = document.querySelector(".tgl-keluar-text");
    outKost.innerHTML = fixKeluar;
  };

  return (
    <div className="detail-kamar">
      <Header {...props} />
      <HeroDetailKamar data={detailKamar.hero} />
      <TitleSection name="Fasilitas Kost" />

      <div className="container container-kamar-fasiltas">
        <div className="row">
          <div className="col-md-6 d-flex flex-wrap">
            <div className="fasilitas-kost-wrapper  ">
              <div className="d-flex justify-content-center">
                <img src={wifi} alt="aeqw" style={{ width: "50px" }} />
              </div>
              <h4 className="text-center mt-3 font-weight-bold">Wifi</h4>
            </div>

            <div className="fasilitas-kost-wrapper  ">
              <div className="d-flex justify-content-center">
                <img src={wifi} alt="aeqw" style={{ width: "50px" }} />
              </div>
              <h4 className="text-center">Wifi</h4>
            </div>

            <div className="fasilitas-kost-wrapper  ">
              <div className="d-flex justify-content-center">
                <img src={wifi} alt="aeqw" style={{ width: "50px" }} />
              </div>
              <h4 className="text-center">Wifi</h4>
            </div>

            <div className="fasilitas-kost-wrapper  ">
              <div className="d-flex justify-content-center">
                <img src={wifi} alt="aeqw" style={{ width: "50px" }} />
              </div>
              <h4 className="text-center">Wifi</h4>
            </div>
          </div>

          <div className="col border border-primary p-5 mb-5">
            <h4 className="font-weight-bold mb-3">Durasi Sewa</h4>
            <div className="form-check mb-2 ml-4">
              <input
                className="form-check-input"
                type="radio"
                id="perbulan"
                name="durasiSewa"
                value="option1"
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
                value="option1"
              />
              <label className="form-check-label" htmlFor="setengahTahun">
                <span className="font-weight-bold">Rp. 3.500.000</span> / 6
                bulan
              </label>
            </div>

            <div className="form-check mb-2 ml-4">
              <input
                className="form-check-input"
                type="radio"
                id="setahun"
                name="durasiSewa"
                value="option1"
              />
              <label className="form-check-label" htmlFor="setahun">
                <span className="font-weight-bold">Rp. 7.000.000</span> / tahun
              </label>
            </div>

            <h4 className="font-weight-bold mb-3 mt-5">Tanggal Masuk</h4>
            <input
              type="date"
              name="tanggalMasuk"
              id="tanggalMasuk"
              className="input-date form-control"
              onChange={handleClick}
            />

            <h4 className="font-weight-bold mb-3 mt-5">Tanggal Keluar</h4>
            <h4 className="tgl-keluar-text text-right"> - </h4>

            <h6 className="font-weight-bold mb-3 mt-5 text-secondary">
              Biaya Sewa
            </h6>
            <h5 className="biaya-sewa-text text-right font-weight-bold"> - </h5>

            <h6 className="font-weight-bold mb-3 mt-5 text-secondary">
              Biaya Admin
            </h6>
            <h5 className="biaya-admin-text text-right font-weight-bold">-</h5>

            <h6 className="font-weight-bold mb-3 mt-5 text-secondary">
              Total Biaya
            </h6>
            <h2 className="Total-biaya-text text-right font-weight-bold">-</h2>

            <Button
              type="link"
              href="/checkout"
              className="btn btn-primary w-100 mt-3 font-weight-bold"
              hasShadow
            >
              Lanjutkan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
