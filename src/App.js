import React, { useState } from 'react';
import GoalList from './Components/GoalList/GoalList';
import NewGoal from './Components/NewGoal/NewGoal';
import './App.css';


function App() {
  const [goalsList, setGoalsList] = useState(
    [
      {id: 'Goal 1', text: 'Buy Nissan Patrol Nismo'},
      {id: 'Goal 2', text: 'Build a House'},
      {id: 'Goal 3', text: 'Build Rental Apartments'},
    ]
  );

  

  const addNewGoalHandler = (newGoal) => {
    setGoalsList((prevgoalsList) =>  prevgoalsList.concat(newGoal));
  }
  return (
    <div>
      <h2 className='goals-h1'>Goals</h2>
      
      <NewGoal onAddGoal={addNewGoalHandler} />

      <GoalList goals={goalsList} />
    </div>
  );
}

export default App;
