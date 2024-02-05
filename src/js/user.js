import { users, User } from '/src/js/data.js';

export function isValidUser(username, password) {

    let user = findUserByUsername(username);

    if(user!=null && user.password == password) {
        window.sessionStorage.setItem('user', JSON.stringify(user));
        return true;
    }
    window.sessionStorage.removeItem('user');
    return false;
}

export function findUserByUsername(username) {
    const userOpt = [...users].filter(user => user.username == username);
    return userOpt.length == 1 ? userOpt[0]: null;
}

export function getSessionUser() {
    const userJsonStr = window.sessionStorage.getItem('user');
    return userJsonStr != null ? JSON.parse(userJsonStr): null;
}

export function logout() {
    window.sessionStorage.clear();
}

globalThis.getSessionUser = getSessionUser;