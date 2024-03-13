import { configureStore } from '@reduxjs/toolkit';
import userReducer from './stateManagement/userReducer';
import postReducer from './stateManagement/postReducer';

const store = configureStore(
    {
        reducer: {
            user: userReducer,
            post: postReducer
        }
    }
)
export default store;