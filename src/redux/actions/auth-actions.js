import ActionTypes from "../ActionTypes"



export const userData = (data) => {
    return {
        type: ActionTypes.USER_DATA,
        data: data
    }


}