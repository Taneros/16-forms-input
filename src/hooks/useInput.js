import React, {useState} from 'react';

const useInput = (validateValueCallback) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isFormTouched, setIsFormTouched] = useState(false);

  // const valueIsValid = enteredValue.trim() !== '';
  const valueIsValid = validateValueCallback(enteredValue);

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
