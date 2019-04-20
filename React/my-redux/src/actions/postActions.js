import { FETCH_POSTS, NES_POSTS } from './types'
// 分发操作
/*
export function fetchPosts() {
    return function (dispatch) {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(posts =>
                dispatch({
                    type: FETCH_POSTS,
                    payload: posts
                })
            )
    }
}*/

// es6
export const fetchPosts = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(posts =>
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            })
        )
}

export const createPost = (postDate) => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(postDate)
    })
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: NES_POSTS,
                payload: data
            })
        )
}
