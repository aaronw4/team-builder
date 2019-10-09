import React, { useState } from "react";

const EditTeamForm = props => {

    const [newInfo, setNewInfo] = useState({name:'', email:'', role:'', id:null});
    

    const addList = e => {
        setNewInfo({...newInfo, [e.target.name]: e.target.value })
    };

    const hitSubmit = e => {
        e.preventDefault();
        props.edit(newInfo);
        setNewInfo({name:'', email:'', role:'', id:null});
    };

    return (
        <div>
        <h3>Edit Member Form</h3>
        <form onSubmit={hitSubmit}>
            <label htmlFor='name'>Name: </label>
            <input
                id='name'
                value={newInfo.name}
                name='name'
                type='text'
                onChange={addList}
            />
            <br></br>
            <label htmlFor='email'>email: </label>
            <input
                id='email'
                value={newInfo.email}
                name='email'
                type='text'
                onChange={addList}
            />
            <br></br>
            <label htmlFor='role'>role: </label>
            <input
                id='role'
                value={newInfo.role}
                name='role'
                type='text'
                onChange={addList}
            />
            <br></br>
            <button className='button' type='submit'>Submit Changes</button>
            <button className='button' onClick={props.cancel}>Cancel</button>
        </form>
        </div>
    )
}

export default EditTeamForm;