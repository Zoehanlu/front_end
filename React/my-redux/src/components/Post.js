import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {fetchPosts} from "../actions/postActions";

class Post extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    componentDidMount() {
        // 触发action操作
        this.props.fetchPosts();
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const PostItems = (this.props.posts || []).map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return(
            <div>
                <h1>Post</h1>
                {PostItems}
            </div>
        )
    }
}

Post.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
    posts: state.posts.posts,
    newPost: state.posts.newPost
})

export default connect(mapStateToProps, { fetchPosts })(Post);