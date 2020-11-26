import propTypes from "prop-types";

export default function TitleSection(props) {
  return (
    <>
      <h3 className="title-section font-weight-bold">
        {props.name}{" "}
        <span className="title-lokasi text-primary">{props.lokasi}</span>
      </h3>
    </>
  );
}

TitleSection.propTypes = {
  name: propTypes.string,
  lokasi: propTypes.string,
};
