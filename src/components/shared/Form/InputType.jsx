import React from 'react'
import PropTypes from 'prop-types';
const InputType = ({labelText,labelFor,inputType,value, onChange,name}) => {
  return (
    <div className="mb-3">
            <label htmlFor={labelFor} className="form-label">
            {labelText}
            </label>
            <input 
            type={inputType}
            className="form-control"
            name={name}
            value={value}
            onChange={onChange}
            />
            
        </div>
  )
}
// Prop validation
InputType.propTypes = {
  labelText: PropTypes.string.isRequired,
  labelFor: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
export default InputType