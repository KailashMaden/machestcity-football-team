import React from 'react';

const FormField = ({ formdata, id, change }) => {
  const showError = () => {
    let errorMessage = (
      <div className="error_label">
        {formdata.validation && !formdata.valid
          ? formdata.validationMessage
          : null}
      </div>
    );
    return errorMessage;
  };

  const renderTemplate = () => {
    let action = formdata.element;

    switch (action) {
      case 'input':
        return (
          <div>
            {formdata.showlabel && (
              <div className="label_inputs">{formdata.config.label}</div>
            )}
            <input
              {...formdata.config}
              value={formdata.value}
              onChange={(e) => change({ e, id })}
            />
            {showError()}
          </div>
        );
      case 'select':
        return (
          <div>
            {formdata.showlabel && (
              <div className="label_inputs">{formdata.config.label}</div>
            )}
            <select value={formdata.value} onChange={(e) => change({ e, id })}>
              <option value="">Select one</option>
              {formdata.config.options.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.value}
                </option>
              ))}
            </select>
            {showError()}
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderTemplate()}</div>;
};

export default FormField;
