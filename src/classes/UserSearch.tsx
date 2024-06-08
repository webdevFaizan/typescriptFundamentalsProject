
import { Component, ReactNode } from 'react';

interface User {
    name : string;
    age : number
}

interface StateGeneric {
    name : string;
    user : User | undefined;
    users : User[] | undefined;
}

class UserSearch extends Component {
    constructor(props : any){
        super(props);
        console.log('constructor was called');;
    }

    users = [
        {name: 'Sarah', age: 20},
        {name: 'Rahul', age: 40},
        {name: 'Kamikaze', age: 23},
    ];

    state : StateGeneric = {
        name : '',
        user : undefined,
        users : this.users
    }

    searchUser = () =>{
        const { users } = this.state;
        const foundUser = users && users?.length>0 && users?.find((userItem : User) => userItem.name === this.state.name);
        console.log(foundUser);
        this.setState({ user : foundUser })
    }

    render() {
        const { name, user } = this.state;
        return (
            <div>
                User Search
                <input value={name} onChange={(e)=> this.setState({ name : e.target.value})}/>
                <button onClick={this.searchUser}>Click</button>
                {user && 
                    (<div>
                        Found User
                        <p>{user.name} + {user.age}</p>
                    </div>)}
            </div>
        )
    }
}

export default UserSearch;