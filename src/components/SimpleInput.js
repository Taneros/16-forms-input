import React, {useState} from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';

  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsValid
    ? 'form-control invalid'
    : 'form-control';

  let formIsValid = false;

  if (enteredNameIsValid) formIsValid = true;

  const handleNameInputBlur = (event) => {
    setEnteredNameTouched(true);
  };

  const handleNameInputChange = (event) => {
    setEnteredName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enteredNameIsValid === false) return;

    setEnteredName('');
    setEnteredNameTouched(false);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onBlur={handleNameInputBlur}
          onChange={handleNameInputChange}
        />
        {nameInputIsValid && (
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
