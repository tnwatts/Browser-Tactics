// API modules are used to perform the AJAX
// communications between client (browser)
// and the server
import sendRequest from './send-request';
const BASE_URL = '/api/users';

export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}
export function deleteUser(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

export function getProfile(userId) {
  return sendRequest(`${BASE_URL}/profile/${userId}`)
}

export function setName(userId, profileData) {
  return sendRequest(`${BASE_URL}/profile/${userId}`, 'PUT', {profileData} )
}