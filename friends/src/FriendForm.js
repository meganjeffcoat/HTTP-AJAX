import React from 'react';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            age:'',
            email:''
        };
    }
    render() {
        return (
            <div>
                <form>
                    <input 
                        type='text'
                        name='name'
                        value={this.state.name}
                        placeholder='Name'
                    />
                     <input 
                        type='text'
                        name='age'
                        value={this.state.age}
                        placeholder='Age'
                    />
                     <input 
                        type='text'
                        name='email'
                        value={this.state.email}
                        placeholder='E-Mail'
                    />
                    <button>Submit</button>
                </form>
            </div>
        ) 
    }
}


export default FriendForm;