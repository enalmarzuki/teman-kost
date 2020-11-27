import React from "react";
import Button from "../../atoms/Button";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="bg-primary  mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h2 className="font-weight-bold">Teman Kost.</h2>
            <p className="brand-tagline">
              Bergabung Bersama Kami Dan Temukan Kost Yang Menarik, Harga Lebih
              Terjangkau, Dengan Segala Kemudahan Yang Kami Tawarkan
            </p>
          </div>

          <div className="col-md-2  offset-md-1 mb-4">
            <h6 className="mt-2 footer-title font-weight-bold">Teman Kost</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/about">
                  Tentang Kami
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/central-help">
                  Pusat Bantuan
                </Button>
              </li>
            </ul>
          </div>

          <div className="col-md-2 mb-4 ml-auto">
            <h6 className="mt-2 footer-title font-weight-bold">Kebijakan</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/privacy-policy">
                  Kebijakan Privasi
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Syarat & Ketentuan
                </Button>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="mt-2 footer-title font-weight-bold">Kontak Kami</h6>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/">
                  Bukit Tamalanrea Permai, Makassar
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/">
                  support@temankost.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/">
                  021 - 1111 - 2222
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center copyrights">
            Copyright • 2020 All rights reserved • TemanKost.id
          </div>
        </div>
      </div>
    </footer>
  );
}
