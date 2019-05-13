import React, { Component } from 'react'
// import axios from 'axios';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';

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

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
    }

    render() {
        console.log(this.props)
        const post = this.props.post ? (
            <div className="container">
                <h4>{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <button className="btn btn-danger btn-sm" onClick={this.handleClick}>Delete Post</button>
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
    // console.log(id);
    return {
        post: state.posts.find(post => post.id = id)
        // post: state.posts.post.id = '3'
    }    
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);