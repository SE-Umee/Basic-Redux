import { combineReducers } from "redux";
import { eductionReducer } from "./reducers/eductional-reducer";
import { userReducer } from "./reducers/profile-reducre";
import { relativeReducer } from "./reducers/relative-reducer";

export const rootReducer = () => combineReducers({
    user: userReducer,
    eduction: eductionReducer,
    relative: relativeReducer
})