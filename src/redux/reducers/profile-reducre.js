import ActionTypes from "../ActionTypes";


const initials = {
    userData: {}
}

export function userReducer(state = initials, action) {
    switch (action.type) {
        case ActionTypes.USER_DATA:
            console.log()
            return {
                ...state,
                userData: action.data
            };
        default: {
            return state
        }
    }
}