import React,{useRef,useState} from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef(null)
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const handleNameInputBlur = (event) => {
    setEnteredNameTouched(true)

    
    if(nameInputRef.current.value.trim() === '') {
      setEnteredNameIsValid(false)
    }
    
  }

  const handleNameInputChange = (event) => {
    setEnteredName(event.target.value)

        
    
    
    
    if(nameInputRef.current.value.trim() !== '') {
      setEnteredNameIsValid(true)
      
    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    
    setEnteredNameTouched(true)

    if(nameInputRef.current.value.trim() === '') {
      setEnteredNameIsValid(false)
      return
    }
    
    
    setEnteredNameIsValid(true)
    setEnteredName(nameInputRef.current.value)
    
    console.log(`enteredName`, enteredName)
    
    nameInputRef.current.value = ''
  }

  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched

  const nameInputClasses = nameInputIsValid ? 'form-control invalid' :'form-control'

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} onBlur={handleNameInputBlur} onChange={handleNameInputChange}/>
        {nameInputIsValid && <p className='error-text'>Name must not be empty!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
