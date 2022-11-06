import React, {useState} from 'react';

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isFormTouched, setIsFormTouched] = useState(false);

  // const valueIsValid = enteredValue.trim() !== '';
  const valueIsValid = validateValue(enteredValue);

  const hasError = !valueIsValid && isFormTouched;

  const handleInputValueChange = (event) => {
    setEnteredValue(event.target.value);
  };

  const handleInputBlur = () => {
    setIsFormTouched(true);
  };

  const resetForm = () => {
    setEnteredValue('');
    setIsFormTouched(false);
  };

  return {
    value: enteredValue,
    valueIsValid,
    hasError,
    handleInputValueChange,
    handleInputBlur,
    resetForm,
  };
};

export default useInput;
