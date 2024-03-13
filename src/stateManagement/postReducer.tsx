import { Post } from "../model/post";


export const Actions = Object.freeze({
    setPost: (post: Post) => ({ type: '[POST_STATE] POST_SET', postload: post })
});

interface State {
    post: Post | null;
}

const initialState: State = {
    post:null
}

const postReducer = (state = initialState, action: any) => {
    console.log(action);
    switch (action.type) {
        case '[POST_STATE] POST_SET':
            return { ...state, post: action.postload };
        default:
            return state;
    }

}

export default postReducer;