import React, { Component } from 'react';
import axios from 'axios';

class AddPost extends Component {
    state = { 
        title: ''
    }
    componentDidMount(){
        axios.post('https://jsonplaceholder.typicode.com/posts').then(res => {
            console.log(res.data);
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    handleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    }
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" onChange={this.handleChange} className="form-control" id="title" placeholder="Title" value={this.state.title}/>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
         );
    }
}
 
export default AddPost;