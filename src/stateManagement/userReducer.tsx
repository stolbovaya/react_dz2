import { User } from "../model/user";

interface State {
    user: User | null;
}

const initialState: State = {
    user:null
}

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case '[USER_STATE] USER_SET':
            return { ...state, user: action.payload };
        default:
            return state;
    }

}

export default userReducer;