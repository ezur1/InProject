'use strict';
import httpService from './httpService'
export default {
    query,
    getTaskById,
    remove,
    edit
}
const BASE_URL = (process.env.NODE_ENV !== 'development')
    ? '/api/task'
    : '//localhost:3000/api/task';
function query(filterBy) {
    var queryString = '?';
    if (filterBy) {
        let keys = Object.keys(filterBy);
        let vals = Object.values(filterBy);
        keys.forEach((key, idx) => {
            queryString += `${key}=${vals[idx]}`;
            if (keys.length - 1 !== idx) queryString += '&'
        });
    }
    return httpService.get(`${BASE_URL}${queryString}`)
}
function getTaskById(taskId) {
    return httpService.get(`${BASE_URL}/${taskId}`)
}
function remove(taskId) {
    return httpService.delete(`${BASE_URL}/${taskId}`)
}
function edit(task) {
    if (task._id) return httpService.put(`${BASE_URL}/${task._id}`, task);
    else return httpService.post(BASE_URL, task)
}