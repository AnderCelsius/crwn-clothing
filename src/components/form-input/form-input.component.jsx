import { FormGroup, FormInputLable, Input } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <FormGroup>
      <Input {...otherProps} />
      {label && (
        <FormInputLable shrink={otherProps.value.length}
        >
          {label}
        </FormInputLable>
      )}
    </FormGroup>
  );
};

export default FormInput;
