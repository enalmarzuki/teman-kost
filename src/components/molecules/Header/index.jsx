import React from "react";
import Button from "../../atoms/Button";

import "./Header.scss";

export default function index(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  const toggle = (e) => {
    const hamburger = document.querySelector("div.hamburger-toggle");
    hamburger.classList.toggle("x");

    const list = document.querySelector(".navbar-nav");
    list.classList.toggle("slide-navbar");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-light  header">
      <div className="container header-container">
        <Button
          type="link"
          className="brand-text-icon text-white font-weight-bold my-brand"
          href="/"
        >
          Teman Kost.
        </Button>
        <div className="hamburger-toggle" onClick={toggle}></div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Button
              type="link"
              className={`nav-link btn-home${getNavLinkClass("/")}`}
              href="/"
            >
              Home
            </Button>
            <Button
              type="link"
              className={`nav-link btn-about${getNavLinkClass("/about")}`}
              href="/about"
            >
              Tentang Kami
            </Button>
            <Button
              type="link"
              className={`nav-link btn-search${getNavLinkClass("/search")}`}
              href="#"
              id="about"
            >
              Cari Kost
            </Button>

            <Button
              type="link"
              className="btn-login btn btn-outline-primary px-4"
              href="/login"
            >
              Masuk
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
