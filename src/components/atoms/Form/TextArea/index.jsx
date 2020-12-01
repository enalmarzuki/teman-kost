import React from "react";
import Button from "../../../atoms/Button";

import "./TextArea.scss";

export default function index() {
  return (
    <div className="container container-input-testimoni">
      <div className="row mt-3">
        <div className="col">
          <div className="form-group">
            <textarea className="form-control" rows="5"></textarea>
          </div>
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="col-md-3 d-flex justify-content-end">
          <Button type="link" className="btn btn-primary px-5 " href="">
            Kirim
          </Button>
        </div>
      </div>
    </div>
  );
}
