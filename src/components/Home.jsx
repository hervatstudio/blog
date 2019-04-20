import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../logo.jpg';

class Home extends Component {
    state = {
        posts: [ ]
      }
      
      componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
          this.setState({
            posts: res.data
          })
          console.log(res.data)
        })
      }
    render() { 
        const { posts } = this.state;
        const PostList = posts.map(post => {
        let PostBody = post.body.substring(0,20) + '...';
        return (
            <div className="card mb-2" key={post.id}>
                <div className="card-body">
                <img src={logo} alt=""/>
                <Link to={'/' + post.id}>
                    <h5 className="card-title">{post.title}</h5>
                </Link>
                <p className="card-text">
                    {PostBody}
                </p>
                </div>
            </div>
        );
        })
        return ( 
            <div>
                {PostList}
            </div>
         );
    }
}
 
export default Home;