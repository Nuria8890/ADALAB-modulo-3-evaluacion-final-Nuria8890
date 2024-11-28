import PropTypes from "prop-types";
import "../styles/layout/ResetButton.scss";

function ResetButton({ onClickReset }) {
  const handleClickReset = () => {
    onClickReset();
  };
  return (
    <button className="buttonReset" type="reset" onClick={handleClickReset}>
      Reset
    </button>
  );
}

export default ResetButton;
ResetButton.propTypes = {
  onClickReset: PropTypes.func.isRequired,
};
