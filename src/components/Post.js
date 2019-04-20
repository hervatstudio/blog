import React, { Component } from 'react'
import axios from 'axios';

class Post extends Component {
    state = {
        post: [ ],
        id : null
    }

    componentDidMount(){
        // console.log(this.props);
        let id = this.props.match.params.post_id;
        console.log(id);
        axios.get("https://jsonplaceholder.typicode.com/posts/" + id).then(res=>{
            this.setState({
                post: res.data
            })
            // console.log(res)
        })
        
    }

    render() {
        const { post } = this.state;
        const PostDetails = post ? (
            <div className="container">
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </div>
        ) : (
            <div>Loading...</div>
        )
        return ( 
            <div>
                {PostDetails}
            </div>
         );
    }
}
 
export default Post;