import React, {useState, useCallback, useReducer} from 'react';

const initialState = {
  value: '',
  isFormTouched: false,
};

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT':
      return {...state, value: action.value};
    case 'BLUR':
      return {...state, isFormTouched: true};
    case 'RESET':
      return {value: '', isFormTouched: false};
    default:
      return state;
  }
};

const useInput = (validateValueCallback) => {
  const [{value, isFormTouched}, dispatch] = useReducer(
    inputStateReducer,
    initialState,
  );

  const valueIsValid = validateValueCallback(value);

  const hasError = !valueIsValid && isFormTouched;

  const handleInputValueChange = useCallback((event) => {
    dispatch({type: 'INPUT', value: event.target.value});
  }, []);

  const handleInputBlur = useCallback(() => {
    dispatch({type: 'BLUR'});
  }, []);

  const resetForm = useCallback(() => {
    dispatch({type: 'RESET'});
  }, []);

  return {
    value: value,
    valueIsValid,
    hasError,
    handleInputValueChange,
    handleInputBlur,
    resetForm,
  };
};

export default useInput;
