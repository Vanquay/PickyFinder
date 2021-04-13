import React, {Component} from 'react';

export default class CreateUser extends Component 
{
    constructor(props)
    {
        super(props);
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onChangeProfilePicture=this.onChangeProfilePicture.bind(this);

        this.state=
        {
            username:'',
            password:'',
            profilePicture:'',
            users:[]
        }
    }

    componentDidMount(){
        this.setState({
            users:['test users'],
            username:'testUser',
            password:'COSC484'           
        })
    }

    onChangeUsername(e)
    {
        this.setState
        ({
            username:e.target.value
        });
    }

    onChangePassword(e)
    {
        this.setState
        ({
            password:e.target.value
        });
    }

    onChangeProfilePicture(e)
    {
        this.setState
        ({
            profilePicture:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const user={
            username:this.state.username,
            password:this.state.password,
            profilePicture:this.state.profilePicture
        }
        console.log(user);
    }

    render()
    {
        return( 
            <div>
                <h1>Welcome to the Login Page</h1>
                <h2>Create new user</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        
                    </div>
                </form>
            </div>
        )
    }
}