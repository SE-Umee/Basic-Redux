import ActionTypes from "../ActionTypes";


const initials = {
    userEduction: {}
}

export function eductionReducer(state = initials, action) {
    switch (action.type) {
        case ActionTypes.USER_EDUCTION:
            return {
                ...state,
                userEduction: action.data
            };
        default: {
            return state
        }
    }
}