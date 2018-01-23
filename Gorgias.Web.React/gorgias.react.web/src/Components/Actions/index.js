/**
 * Created by yasser on 1/10/2018.
 */
import todoApp from './ToDo/Reducers';
import storyReducer from './story/reducer';
import authenticationReducer from './authentication/reducer';
import profileReducer from './profile/reducer';

export default {
    todoApp: todoApp,
    storyManager: storyReducer,
    authentication: authenticationReducer,
    profile: profileReducer,
}