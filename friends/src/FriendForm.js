import React from 'react';


function FriendForm (props) {
    function handleSubmit(e) {
        e.preventDefault();
        if (props.isUpdating) {
            props.updateFriend();
        } else {
            props.addFriend();
        }
    }
    return (
    <div className='form-container'>
        <h2>Add New Friend</h2>
        <form >

            <input onSubmit={handleSubmit}
                type="text"
                name="name"
                
                value={props.name}
                placeholder="Name"
                onChange={props.handleChanges}
            />
            <div className='baseline' />
            <input 
                type="text"
                name="age"
                value={props.age}
                placeholder="Age"
                onChange={props.handleChanges}
            />
            <div className='baseline' />
            <input 
                type="text"
                name="email"
                value={props.email}
                placeholder="E-Mail"
                onChange={props.handleChanges}
            />
            <div className='baseline' />

            <button type='submit'>Add New Friend</button>
        </form>
    </div>
    )
}


export default FriendForm;