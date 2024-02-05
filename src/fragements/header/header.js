import { routeInterceptor } from '../../js/route.js';
import { getSessionUser,logout } from '../../js/user.js';
import { findAllCartItems } from '../../js/cart.js';

let currentUser = getSessionUser();
routeInterceptor();

document.querySelector('#username').textContent = currentUser.username;
document.querySelector('#cartItemsCtn').textContent = findAllCartItems().length + '';
document.querySelector('#logout').addEventListener('click',function(){
    logout();
    window.location.href='/src/login.html';
});

console.log(currentUser);

if(currentUser.role.roleId == 1) {
    document.querySelector('#backBtn').classList.toggle('hidden');
}
