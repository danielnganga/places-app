import React, { useState } from 'react';
import './NewGoal.css';

const NewGoal = props => {
    
    const [enteredText, newEnteredText] = useState('');
    const addGoalHandler = (e) => {
        e.preventDefault();
        

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        };

        newEnteredText('');
        props.onAddGoal(newGoal);

    };

    const textChangeHandlet = (e) => {
        newEnteredText(e.target.value);
    }

    return (
        <form className='new-goal' onSubmit={addGoalHandler} >
            <input type='text' value={enteredText} onChange={textChangeHandlet} />
            <button type='submit'> Add Goal</button>
        </form>
    );

};

export default NewGoal;
