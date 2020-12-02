import React from 'react';

const FormField = ({ formdata, id, change }) => {
  const showError = () => {
    let errorMessage = (
      <div className="error_label">
        {formdata.email.validation && !formdata.email.valid
          ? formdata.email.validationMessage
          : null}
      </div>
    );
    return errorMessage;
  };

  const renderTemplate = () => {
    let action = formdata.email.element;

    switch (action) {
      case 'input':
        return (
          <div>
            <input
              {...formdata.email.config}
              value={formdata.email.value}
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
