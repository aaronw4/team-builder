import React, {useState} from 'react';
import './App.css';
import TeamForm from './Form'

function App() {
  const [team, setTeam] = useState([
    {
      name: 'Luke Skywalker',
      email: 'iAmAJedi@gmail.com',
      role: 'backend engineer'
    },
    {
      name: 'Obi-Wan Kenobi',
      email: 'useTheForceLuke@gmail.com',
      role: "frontend engineer"
    },
    {
      name: 'Yoda',
      email: 'doOrDoNot@gmail.com',
      role: 'designer'
    }
  ])

  return (
    <div className="App">
      <h3> Team </h3>
      <div>
        {team.map(data => {
          return(
          <div>
            <p>{data.name}</p>
            <p>{data.email}</p>
            <p>{data.role}</p>
          </div>
        )})}
      </div>
      <TeamForm/>
    </div>
  );
}

export default App;
