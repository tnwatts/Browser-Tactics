import sendRequest from "./send-request";
const BASE_URL = "/api/archetypes";

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function getUsersList(userId) {
  return sendRequest(`${BASE_URL}/users/${userId}`);
}

export function seed() {
  sendRequest(`${BASE_URL}/seed`);
}
