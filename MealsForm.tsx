import * as React from 'react';
import { useRef } from 'react';

const MealsForm = () => {
  const amountUseRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountUseRef.current.value;
    const enteredAmountNumber = +enteredAmount;
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" ref={amountUseRef} min="1" max="5" step="1" />
      <button>+ Add</button>
    </form>
  );
};

export default MealsForm;
