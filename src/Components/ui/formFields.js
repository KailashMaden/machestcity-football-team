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
            <input
              {...formdata.config}
              value={formdata.value}
              onChange={(e) => change({ e, id })}
            />
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
