import HttpClient from "../utils/HttpClient";
import {api} from './api'


// Start News api
export const getNews = (param = {}) => {
    return HttpClient.doGet(api.news , param)
}
export const addNews = (data: any) => {
    return HttpClient.doPost(api.news, data)
}
export const editNews = (data: { object: { id: string; }; }) => {
    return HttpClient.doPost(api.news + data.object.id, data)
}
//Finish News api