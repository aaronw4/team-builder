import React, { useState } from "react";

const TeamForm = props => {

    const [newMember, setNewMember] = useState({name:'', email:'', role:''});

    const addList = e => {
        setNewMember({...newMember, [e.target.name]: e.target.value })
    };

    const hitSubmit = e => {
        e.preventDefault();
        props.addMemeber(newMember);
        setNewMember({name:'', email:'', role:''});
    };

    return (
        <div>
        <h3>Add New Member Form</h3>
        <form onSubmit={hitSubmit}>
            <label htmlFor='name'>Name: </label>
            <input
                id='name'
                value={newMember.name}
                name='name'
                type='text'
                onChange={addList}
            />
            <br></br>
            <label htmlFor='email'>email: </label>
            <input
                id='email'
                value={newMember.email}
                name='email'
                type='text'
                onChange={addList}
            />
            <br></br>
            <label htmlFor='role'>role: </label>
            <input
                id='role'
                value={newMember.role}
                name='role'
                type='text'
                onChange={addList}
            />
        </form>
        </div>
    )
}

export default TeamForm;