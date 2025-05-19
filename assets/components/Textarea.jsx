import React from 'react';

const Textarea = ({name, label, value, onChange, placeholder = "", error=""}) => {
    return (
        <div className="my-3">
        <label htmlFor={name}>{label}</label>
            <textarea 
                value={value}
                onChange={onChange}
                placeholder={placeholder || label}
                name={name}
                id={name}
                className={"form-control" + (error && " is-invalid")}
            />
            {error && (
                <p className="invalid-feedback">{error}</p>
            )
            }
        </div>
      );
}
 
export default Textarea;