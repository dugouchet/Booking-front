import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton } from 'material-ui/RadioButton'
import {
  RadioButtonGroup
} from 'redux-form-material-ui';


const Pute = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return <div>
    <form onSubmit={handleSubmit}>
      <Field name="cancellationReason" component={RadioButtonGroup}>
        <RadioButton value="male" label="male" />
        <RadioButton value="female" label="female" />
      </Field>
      <RaisedButton type="submit" label="Primary" primary />
    </form>
  </div>
};
export default reduxForm({
  form: 'cancellationReasonForm', // a unique identifier for this form,
  getFormState: (state) => state.reservations.form
})(Pute)
