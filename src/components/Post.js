import React, { Component } from 'react'
// import axios from 'axios';
import { connect } from 'react-redux';

class Post extends Component {
    // state = {
    //     post: [ ],
    //     id : null
    // }

    // componentDidMount(){
    //     let id = this.props.match.params.post_id;
    //     console.log(id);
    //     axios.get("https://jsonplaceholder.typicode.com/posts/" + id).then(res=>{
    //         this.setState({
    //             post: res.data
    //         })
    //     })
    // }

    render() {
        console.log(this.props)
        const post = this.props.post ? (
            <div className="container">
                <h4>{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
            </div>
        ) : (
            <div>Loading...</div>
        )
        return ( 
            <div>
                {post}
            </div>
         );
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id = id)
    }
}

export default connect(mapStateToProps)(Post);