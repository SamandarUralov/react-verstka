import * as app from "../../api/AppApi";
import * as types from "../actionTypes/AppActionTypes"
import {toast} from "react-toastify";

// START NEWS FUNCTION
export const getNewsList = () => (dispatch:any) => {
    dispatch({
        api: app.getNews,
        types: [
            types.REQUEST_START,
            types.REQUEST_GET_NEWS_LIST_SUCCESS,
            types.REQUEST_ERROR
        ]
    })

};
export const saveNews= (payload:any) => (dispatch:any) => {
    console.log(payload, "saveNews")
    dispatch({
        api: payload.id ? app.editNews : app.addNews,
        types: [
            types.REQUEST_START,
            types.REQUEST_SUCCESS,
            types.REQUEST_ERROR
        ],
        data: payload.object
    }).then((res: { success: any; }) => {
        if (res.success) {
            dispatch(getNewsList())
            toast.success("News saved successfully!");
        } else {
            toast.error("You cannot save News!")
        }
    }).catch((err: any) => {
        toast.error("Error saving News!");
    })
};
// FINISH NEWS FUNCTION