import React, { useState, useEffect } from "react";

const EditTeamForm = props => {

    useEffect(() => { 

    const [newInfo, setNewInfo] = useState(props.member);
    console.log(newInfo[0])
    

    const addList = e => {
        setNewInfo({...newInfo[0], [e.target.name]: e.target.value })
    };

    const hitSubmit = e => {
        let newObj = newInfo;
        console.log(newObj[0])
        let newObj2 = {...newObj[0], id: props.member[0].id};
        e.preventDefault();
        props.edit(newObj2);
        console.log(newObj2)
    };
})

    return (
        <div className='editCont'>
        <h2 className='title'>Edit Member Form</h2>
        <form onSubmit={hitSubmit} className='edit'>
            <label htmlFor='name'>Name: </label>
            <input
                id='name'
                value={newInfo.name}
                defaultValue={newInfo[0].name}
                name='name'
                type='text'
                onChange={addList}
                className='input'
            />
            <br></br>
            <label htmlFor='email'>email: &nbsp;</label>
            <input
                id='email'
                value={newInfo.email}
                defaultValue={newInfo[0].email}
                name='email'
                type='text'
                onChange={addList}
                className='input'
            />
            <br></br>
            <label htmlFor='role'>role: &nbsp;&nbsp;&nbsp;</label>
            <input
                id='role'
                value={newInfo.role}
                defaultValue={newInfo[0].role}
                name='role'
                type='text'
                onChange={addList}
                className='input'
            />
            <br></br>
            <button className='button' type='submit'>Submit Changes</button>
            <button className='button' onClick={props.cancel}>Cancel</button>
        </form>
        </div>
    )
}

export default EditTeamForm;