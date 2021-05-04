import React, {Component} from 'react';

export default class CreateEvent extends Component 
{
    constructor(props)
    {
        super(props);
        this.onChangeTitle=this.onChangeTitle.bind(this); 
        this.onChangeDescription=this.onChangeDescription.bind(this);
        this.onChangeAddress=this.onChangeAddress.bind(this);
        this.onChangeLocationUpload=this.onChangeLocationUpload.bind(this);
        this.onchangeDate=this.onchangeDate.bind(this);
        this.onChangePeopleNeeded=this.onChangePeopleNeeded.bind(this);

        this.state=
        {
            title:'',
            description:'',
            address:'',
            locationUpload:'',
            peopleNeeded:'',
            date:'',  
        }
    }

    componentDidMount(){
        this.setState({
            users:['test users'],
            username:'testUser',
            password:'COSC484'           
        })
    }

    onChangeTitle(e){
        this.setState({
            title: e.target.value
        })
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        })
    }

    onChangeAddress(e){
        this.setState({
            address: e.target.value
        })
    }

    onChangeLocationUpload(e){
        this.setState({
            locationUpload: e.target.value
        })
    }

    onChangePeopleNeeded(e){
        this.setState({
            peopleNeeded: e.target.value
        })
    }

    onchangeDate(date)
    {
        this.setState({
            date:date
        });
    }
    onSubmit(e){
        e.preventDefault();
        const event={
            title:this.state.title,
            description:this.state.description,
            address:this.state.address,
            locationUpload:this.state.locationUpload,
            peopleNeeded:this.state.peopleNeeded
        }

        console.log(event);
        //Goes back to homepage
        window.location
    }
    render()
    {
        return( 
        
            <div>
                <h1>Create event here</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Event</label>
                        <select name="category" id="category">
                            <option value="soccer">Soccer</option>
                            <option value="football">Basketball</option>
                            <option value="volleyball">VolleyBall</option>
                            <option value="basketball">Basketball</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        
                    </div>
                </form>
            </div>
        )
    }
}