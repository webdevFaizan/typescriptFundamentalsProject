import { combineReducers } from "redux";
import Reducer from "./RepositoryReducer";

const reducers = combineReducers({
    repositoryReducer: Reducer,
})

export default reducers;

export type RootReducerTypes = ReturnType<typeof reducers>;