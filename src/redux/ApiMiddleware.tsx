import * as authActionTypes from "./actionTypes/AuthActionTypes";



const apiMiddleware = (dispatch: (arg0: { type: any; payload?: { success: any; }; }) => void) => (next: (arg0: any) => any) => (action: { api: any; types?: any; data?: any; }) => {
    if (!action.api) {
        return next(action);
    }
    const {api, types: [START, SUCCESS, ERROR], data} = action;
    dispatch({
        type: START
    })
    return api(data)
        .then((response: { data: { success: any; }; status: number; }) => {
            if (response && response.data && (response.data.success ||
                response.status === 201 || response.status === 204 || response.status === 200)) {
                dispatch({
                    type: SUCCESS,
                    payload: response.data
                })
                return {
                    payload: response.data,
                    data,
                    success: true,
                    statusCode: response.status
                }
            } else if (response.status === 401) {
                dispatch({
                    type: authActionTypes.AUTH_LOGOUT
                })
            } else {
                dispatch({
                    type: ERROR
                })
            }
        }).catch((error: any) => {
            dispatch({
                type: ERROR
            })
            throw error;
        })

}

export default apiMiddleware