import React from "react";
import { useForm } from "react-hook-form";

import Button from "../../../components/atoms/Button";

import login from "../../../assests/img/image/login.png";
import back from "../../../assests/img/icon/back.png";

import "./LoginPage.scss";

export default function LoginPage(props) {
  const { register, handleSubmit, errors } = useForm();

  const onsubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="login-page">
      <div className="login-page-image">
        <img src={login} alt="Login Page" className="bg-img" />
      </div>

      <div className="login-page-form">
        <Button type="link" className="btn" href="/">
          <h4 className="font-weight-bold mb-0 ">
            <span>
              <img src={back} alt="kembali" className="mr-3" />
            </span>
            Kembali
          </h4>
        </Button>

        <div className="form-login">
          <h2 className="font-weight-bold mb-4">Login</h2>
          <form>
            <label htmlFor="email">Email *</label>

            <input
              className="form-control"
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              ref={register({ required: "Harus Di Isi" })}
            />
            {errors.email && (
              <p className="error mb-0">{errors.email.message}</p>
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
              ref={register({ required: "Harus Di Isi" })}
            />
            {errors.kataSandi && (
              <p className="error mb-0">{errors.kataSandi.message}</p>
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
            Belum Punya Akun ?{" "}
            <Button type="link" href="/register" className="font-weight-bold">
              Registrasi
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}
