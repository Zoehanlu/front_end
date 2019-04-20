// reducer作用： 返回新的状态
import {FETCH_POSTS, NES_POSTS} from '../actions/types'
const initialState = {
    posts: [],
    newPost:{}
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case NES_POSTS:
            return {
                ...state,
                newPost: action.payload
            }
        default:
            return state;
    }
}