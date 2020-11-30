import propTypes from "prop-types";

import "./TitleSection.scss";

export default function TitleSection(props) {
  const { name, lokasi } = props;
  return (
    <div className="container container-title-section">
      <div className="row">
        <div className="col">
          <h3 className="title-section font-weight-bold">
            {name}{" "}
            {lokasi !== undefined ? (
              <span className="title-lokasi text-primary">{lokasi}</span>
            ) : (
              ""
            )}
          </h3>
        </div>
      </div>
    </div>
  );
}

TitleSection.propTypes = {
  name: propTypes.string,
  lokasi: propTypes.string,
};
