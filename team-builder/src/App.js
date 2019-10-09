import React, {useState} from 'react';
import './App.css';
import TeamForm from './Form';
import EditTeamForm from './EditForm';

function App() {
  const [team, setTeam] = useState([
    {
      name: 'Luke Skywalker',
      email: 'iAmAJedi@gmail.com',
      role: 'backend engineer',
      id: 0
    },
    {
      name: 'Obi-Wan Kenobi',
      email: 'useTheForceLuke@gmail.com',
      role: "frontend engineer",
      id: 1
    },
    {
      name: 'Yoda',
      email: 'doOrDoNot@gmail.com',
      role: 'designer',
      id: 2
    }
  ])

  const addMember = info => {
    const newMember = {
      name: info.name,
      email: info.email,
      role: info.role,
      id: team.length
    };
    setTeam([...team, newMember]);
    console.log(team)
  };

  const [member, setMember] = useState([]);
  const [edit, setEdit] = useState(false);

  const selectEdit = (button) => {
    setEdit(true);
    let id = Number(button.target.value);
    const arr = team.filter(i => {
      return(i.id === id)
    });
    setMember(arr);
  };

  const editMember = () => {
    
  }

  const cancelEdit = () => {
    setEdit(false);
  };
  
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
              <button value={data.id} onClick={selectEdit}>Edit</button>
            </div>
          )})}
        </div>
      {edit === true ? <EditTeamForm cancel={cancelEdit} member={member} edit={editMember}/> : <TeamForm addMember={addMember}/>}
      <div></div>
    </div>
  );
}

export default App;
