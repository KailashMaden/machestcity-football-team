import React, { Component } from 'react';
import { auth } from '../../firebase';

import FormField from '../ui/formFields';
import { validate } from '../ui/misc';

class SignIn extends Component {
  state = {
    formError: false,
    formSuccess: '',
    formdata: {
      email: {
        element: 'input',
        value: '',
        config: {
          name: 'email_input',
          type: 'email',
          placeholder: 'Enter your email',
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        validationMessage: '',
      },
      password: {
        element: 'input',
        value: '',
        config: {
          name: 'password_input',
          type: 'password',
          placeholder: 'Enter your password',
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
      },
    },
  };
  updateForm(element) {
    const newFormdata = { ...this.state.formdata };
    const newElement = { ...newFormdata[element.id] };

    newElement.value = element.e.target.value;

    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    newFormdata[element.id] = newElement;

    this.setState({
      formError: false,
      formdata: newFormdata,
    });
  }
  submitForm(e) {
    e.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].value && formIsValid;
    }

    if (formIsValid) {
      auth
        .signInWithEmailAndPassword(dataToSubmit.email, dataToSubmit.password)
        .then(() => {
          this.props.history.push('/dashboard')
        })
        .catch((error) => {
          this.setState({
            formError: true,
          });
        });
    } else {
      this.setState({
        formError: true,
      });
    }
  }
  render() {
    return (
      <div className="container">
        <div className="signin_wrapper" style={{ margin: '100px' }}>
          <form onSubmit={(e) => this.submitForm(e)}>
            <h2>Please Login</h2>
            <FormField
              id={'email'}
              formdata={this.state.formdata.email}
              change={(element) => this.updateForm(element)}
            />

            <FormField
              id={'password'}
              formdata={this.state.formdata.password}
              change={(element) => this.updateForm(element)}
            />
            {this.state.formError && (
              <div className="error_label">Something is wrong, try again.</div>
            )}
            <button onClick={(e) => this.submitForm(e)}>Log in</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
