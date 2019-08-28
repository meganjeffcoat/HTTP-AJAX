import React from 'react';


function Friends(props) {
    return(
        <div>
            {props.friends.map(friend => (
                <div key={friend.id}>
                    <div><span>{friend.name}</span></div>
                    <div><span>{friend.age}</span></div>
                    <div><span>{friend.email}</span></div>
                </div>
            ))}
        </div>
    )
}


export default Friends; 