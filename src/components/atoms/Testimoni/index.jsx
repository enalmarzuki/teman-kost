import Testimoni from "../../../assests/img/image/testimoni.jpg";

import "./Testimoni.scss";

export default function index(props) {
  return (
    <div className="container container-testimoni">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-7 text-center isi-testimoni-user">
          <h2>
            Website ini sangat memudahkan saya sebagai mahasiswa baru untuk
            mencari kost yang ada di makassar, dan pilihan kost-nya juga sangat
            lengkap.
          </h2>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-lg-1 mr-3 image-column">
          <img src={Testimoni} alt="user respon" className="testimoni-img" />
        </div>
        <div className="col-lg-3 testimoni-user align-self-center">
          <h4 className="font-weight-bold mb-1">Joanna Alexander</h4>
          <p className="text-secondary mb-0">Mahasiswa</p>
        </div>
      </div>
    </div>
  );
}
