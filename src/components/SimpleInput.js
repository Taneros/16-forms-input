import React, {useRef, useState} from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  
  const handleNameInput = (event) => {
    setEnteredName(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    console.log(`enteredName`,enteredName)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={handleNameInput}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
