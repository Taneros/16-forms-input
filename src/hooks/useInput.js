import React, {useState, useCallback} from 'react';

const useInput = (validateValueCallback) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isFormTouched, setIsFormTouched] = useState(false);

  // const valueIsValid = enteredValue.trim() !== '';
  const valueIsValid = validateValueCallback(enteredValue);

  const hasError = !valueIsValid && isFormTouched;

  const handleInputValueChange = useCallback((event) => {
    setEnteredValue(event.target.value);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFormTouched(true);
  }, []);

  const resetForm = useCallback(() => {
    setEnteredValue('');
    setIsFormTouched(false);
  }, []);

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
