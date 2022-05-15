import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <form className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </form>
  );
};

export default FormInput;
