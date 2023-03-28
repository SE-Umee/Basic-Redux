import ActionTypes from "../ActionTypes";


const initials = {
    relative: [],
}

export function relativeReducer(state = initials, action) {
    switch (action.type) {
        case ActionTypes.USER_RELATIVE:
            return {
                ...state,
                relative: [action.data, ...state.relative]
            }
        case ActionTypes.UPDATE_USER:
            let index = state.relative.findIndex(relative => relative.id === action.data.id);
            let _cloneRelative = [...state.relative];
            _cloneRelative[index] = action.data
            console.log("mmmmmmmmmmm", _cloneRelative)
            return {
                ...state,
                relative: _cloneRelative
            };
        default: {
            return state
        }
    }
}