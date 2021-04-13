import React, {Component} from 'react';

export default class CreateEvent extends Component 
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            username:'',
            category:'',
            title:'',
            description:'',
            address:'',
            date:'',
            users:[]   
        }
    }

    onchangeDate(date)
    {
        this.setState({
            date:date
        });
    }
    render()
    {
        return( 
        
            <div>
                <h1>Create event here</h1>
            </div>
        )
    }
}