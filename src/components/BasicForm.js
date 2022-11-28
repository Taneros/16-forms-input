import react from 'react';
import useInput from '../hooks/useInput';

const checkIsNotEmpty = (value) => value.trim() !== '';
const checkEmail = (value) => value.includes('@');

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    valueIsValid: firstNameIsValid,
    handleInputValueChange: handleFirstNameChange,
    handleInputBlur: handleFirstNameOnBlur,
    resetForm: handleFirstNameReset,
    hasError: firstNameHasError,
  } = useInput(checkIsNotEmpty);

  const {
    value: lastNameValue,
    valueIsValid: lastNameIsValid,
    handleInputValueChange: handleLastNameChange,
    handleInputBlur: handleLastNameOnBlur,
    resetForm: handleLastNameReset,
    hasError: lastNameHasError,
  } = useInput(checkIsNotEmpty);

  const {
    value: emailValue,
    valueIsValid: emailIsValid,
    handleInputValueChange: handleemailChange,
    handleInputBlur: handleemailOnBlur,
    resetForm: handleEmailReset,
    hasError: emailHasError,
  } = useInput(checkEmail);

  const firstNameClassName = firstNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const lastNameClassName = lastNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const emailClassName = emailHasError
    ? 'form-control invalid'
    : 'form-control';

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!formIsValid) return;
    console.log(`Submitted!`);
    handleFirstNameReset();
    handleLastNameReset();
    handleEmailReset();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="control-group">
        <div className={firstNameClassName}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={handleFirstNameChange}
            onBlur={handleFirstNameOnBlur}
          />
          {firstNameHasError && (
            <p className="error-text">Please enter a first name.</p>
          )}
        </div>
        <div className={lastNameClassName}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameValue}
            onChange={handleLastNameChange}
            onBlur={handleLastNameOnBlur}
          />
          {lastNameHasError && (
            <p className="error-text">Please enter a last name.</p>
          )}
        </div>
      </div>
      <div className={emailClassName}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={handleemailChange}
          onBlur={handleemailOnBlur}
        />
        {emailHasError && (
          <p className="error-text">Please enter a last name.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
