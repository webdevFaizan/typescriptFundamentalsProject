import { combineReducers } from "redux";
import Reducer from "./RepositoryReducer";


const reducers = combineReducers({
    repositoryReducer: Reducer,
})

export default reducers;