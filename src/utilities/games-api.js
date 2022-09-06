import sendRequest from './send-request';
const BASE_URL = '/api/games';


export function createGame(userId) {
    return sendRequest(`${BASE_URL}/pOne/${userId}`, 'POST')
}

export function getAll() {
    return sendRequest(BASE_URL);
}
  
export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}
  


export function addPTwo(gameId, userId) {
    return sendRequest(`${BASE_URL}/${gameId}/ptwo/${userId}`, 'POST');
  }

export function updateBoardState(gameId, gameState) {
    return sendRequest(`${BASE_URL}/${gameId}`, 'PUT', { gameState });
}
  