import React, {Component} from 'react'
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {createPost} from "../actions/postActions";

class PostForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body,
        };

        // 触发action
        this.props.createPost(post);
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const {title, body} = this.state;
        return(
            <div className="PostForm">
                <h1>添加内容</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div>
                        <label>title</label>
                        <br/>
                        <input type="text" name="title" value={title}
                               onChange={this.onChange.bind(this)}/>
                    </div>
                    <div>
                        <label>body</label>
                        <br/>
                        <textarea name="body" value={body}
                                  onChange={this.onChange.bind(this)}/>
                    </div>
                    <br/>
                    <button type="submit">添加</button>
                </form>
            </div>
        )
    }
}


PostForm.propsTypes = {
    createPost: PropTypes.func.isRequired,
    newPost: PropTypes.array.isRequired
}

export default connect(null, { createPost })(PostForm);