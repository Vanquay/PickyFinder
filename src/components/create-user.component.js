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

    /*onChangeProfileImg(e)
    {
        profileImg ='https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/'
        
        this.setState
        ({
            profileImg:e.target.value
        })
    }
    */

    onChangeProfilePicture(e)
    {
        
        this.setState
        ({
            //profilePicture : 'https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/'
            profilePicture:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const user={
            username:this.state.username,
            password:this.state.password,
            profilePicture:this.state.profilePicture
            //profileImg:this.state.profileImg

        }
       // const{profileImg}

        console.log(user);
    }

    render()
    {
        const{profileImg}= this.state.profilePicture
       // this.state.profilePicture = 'https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/'
        return( 
            <div>
                <h1>Welcome to the Login Page</h1>
                <h2>Create new user</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                  
                        <h1 className= "heading">Add your Image</h1>
                        <div className= "img-holder"></div>
                            <img src={profileImg} alt="" id="img" className="img"></img>
                            <input type="file" name="image-upload" id="input" accept="image/*">
                        <div className = "label">
                            <label htmlFor="input" className= "image-upload">
                                <i className= "material-icons">add_photo_alternate</i>
                                Choose yor photo
                            </label>
                        </div>
                    </input>
                    </div>
                </form>
                
            </div>
        )
    }
}


                