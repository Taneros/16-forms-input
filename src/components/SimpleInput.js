import React, {useState} from 'react';
import useInput from '../hooks/useInput';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    valueIsValid: nameIsValid,
    hasError: nameInputHasError,
    handleInputValueChange: handleInputNameChange,
    handleInputBlur: handleInputNameBlur,
    resetForm,
  } = useInput((name) => name.trim() !== '');

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  let formIsValid = false;

  if (nameIsValid) formIsValid = true;

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (nameIsValid === false) return;

    resetForm();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onBlur={handleInputNameBlur}
          onChange={handleInputNameChange}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
