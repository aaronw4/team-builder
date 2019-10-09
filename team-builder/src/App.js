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

  const addMember = info => {
    const newMember = {
      name: info.name,
      email: info.email,
      role: info.role
    };

    setTeam([...team, newMember]);
  }

  return (
    <div className="App"> 
      <div></div>
      <div>
        <h3> Team </h3>
          {team.map(data => {
            return(
            <div className='memberInfo'>
              <p>{data.name}</p>
              <p>{data.email}</p>
              <p>{data.role}</p>
            </div>
          )})}
        </div>
      <TeamForm addMember={addMember}/>
      <div></div>
    </div>
  );
}

export default App;
