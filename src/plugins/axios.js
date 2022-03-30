import Vue from 'vue'
// Lib imports
import axios from 'axios'
//import store from '../store'

axios.defaults.withCredentials = true

axios.interceptors.response.use(function (response) {
	// Any status code that lie within the range of 2xx cause this function to trigger
	// Do something with response data
	// if (!response.config.url.startsWith("/public/")) {
	// 	store.dispatch('updateUser')
	// }
	// store.commit('setCSRF')
	return response;
}, function (error) {
	// Any status codes that falls outside the range of 2xx cause this function to trigger
	// Do something with response error
	return Promise.reject(error);
});

Vue.prototype.$http = axios
// Vue.prototype.$http.handleResponse = function (x) {
// 	if (x.data.message)
// 		Vue.toasted[x.data.status === 200 ? 'success' : 'error'](x.data.message)
// 	return x.data.status === 200
// };
