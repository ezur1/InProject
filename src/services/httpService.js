'use strict';
import axios from 'axios'
import router from '../router/index.js'
axios.defaults.withCredentials = true;
function _handleError(err) {
    console.log('Err:', err);
    if (err.response.status === 401) {
        sessionStorage.clear();
        router.push('/');
    }
    throw err;
}
function get(url) {
    return axios.get(url)
        .then(res => res.data)
        .catch(_handleError)
}
function remove(url) {
    return axios.delete(url)
        .then(res => res.data)
        .catch(_handleError)
}
function post(url, data) {
    return axios.post(url, data)
        .then(res => res.data)
        .catch(_handleError)
}
function put(url, data) {
    return axios.put(url, data)
        .then(res =>{
           return  res.data
        })
        .catch(_handleError)
}
export default {
    get,
    delete: remove,
    post,
    put
}

