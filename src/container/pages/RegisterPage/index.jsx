import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import Button from "../../../components/atoms/Button";

import register2 from "../../../assests/img/image/register2.jpg";
import back from "../../../assests/img/icon/back.png";

import "./RegisterPage.scss";

export default function RegisterPage(props) {
  const { register, handleSubmit, errors, watch } = useForm();

  const [isLoading, setisLoading] = useState(false);

  const loading = async () => {
    await new Promise((resolve, reject) => {
      setisLoading(true);
      setTimeout(() => {
        setisLoading(false);
        resolve();
      }, 3000);
    });
  };

  const kataSandi = useRef({});
  kataSandi.current = watch("kataSandi", "");

  const onsubmit = async (data) => {
    await loading();
    console.log(data);
  };

  return (
    <div className="register-page">
      {isLoading && (
        <div className="loading-submit">
          <h4 className="font-weight-bold">Loading...</h4>
        </div>
      )}
      <div className="register-page-form">
        <Button type="link" className="btn" href="/">
          <h4 className="font-weight-bold mb-0 ">
            <span>
              <img src={back} alt="kembali" className="mr-3" />
            </span>
            Kembali
          </h4>
        </Button>

        <div className="form-login">
          <h2 className="font-weight-bold mb-4">Registrasi</h2>
          <form>
            <label htmlFor="email">Email *</label>
            <input
              className="form-control"
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              ref={register({
                required: "Harus Di Isi",
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <p className="error mb-0">{errors.email.message}</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p className="error mb-0">Email Salah</p>
            )}

            <label htmlFor="kataSandi" className="mt-4">
              Kata Sandi *
            </label>

            <input
              className="form-control"
              type="password"
              id="kataSandi"
              name="kataSandi"
              placeholder="Kata Sandi"
              ref={register({
                required: "Harus Di Isi",
                minLength: { value: 6, message: "Kata Sandi Harus 6 Karakter" },
              })}
            />
            {errors.kataSandi && (
              <p className="error mb-0">{errors.kataSandi.message}</p>
            )}

            <label htmlFor="konfirmasiSandi" className="mt-4">
              Konformasi Kata Sandi *
            </label>

            <input
              className="form-control"
              type="password"
              id="konfirmasiSandi"
              name="konfirmasiSandi"
              placeholder="Konfirmasi Kata Sandi"
              ref={register({
                required: "Harus Di Isi",
                validate: (value) =>
                  value === kataSandi.current || "Password Tidak Sama",
              })}
            />
            {errors.konfirmasiSandi && (
              <p className="error mb-0">{errors.konfirmasiSandi.message}</p>
            )}
          </form>
          <Button
            type="button"
            className="btn font-weight-bold mb-3 py-2 mt-4"
            isBlock
            isPrimary
            onClick={handleSubmit(onsubmit)}
          >
            Masuk
          </Button>

          <p className="text-center">
            Sudah Punya Akun ?{" "}
            <Button type="link" href="/login" className="font-weight-bold">
              Login
            </Button>
          </p>
        </div>
      </div>

      <div className="register-page-image">
        <img src={register2} alt="Register Page" />
      </div>
    </div>
  );
}
