import * as types from "../actionTypes/AppActionTypes";
import {createReducer} from "../../utils/StoreUtils";

const initState = {
    showModal: false,
    active: false,
    currentItem: null,
    news:[],
};
const reducers = {
    [types.REQUEST_START](state) {
        state.loading = true;
        state.currentItem = null;
        state.text = null;
    },
    [types.REQUEST_SUCCESS](state) {
        state.showModal = false;
        state.currentItem = null;
    },
    [types.CHANGE_SHOW_MODAL](state, payload){
        state.showModal=payload.payload.showModal
        state.currentItem=payload.payload.currentItem
    },
    [types.CHANGE_ACTIVE](state) {
        state.active = !state.active;
    },
    [types.REQUEST_GET_NEWS_LIST_SUCCESS](state, payload) {
        state.news = payload.payload.object;
    },
    updateState(state, {payload}) {
        return {
            ...state,
            ...payload
        }
    },
};
export default createReducer(initState, reducers);