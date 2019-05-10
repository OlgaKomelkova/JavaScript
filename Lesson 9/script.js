  /*jshint esversion: 6 */

let age   = document.getElementById('age');
    
function showUser(surname, name) {
  alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

let a  = showUser.bind(age);

a('User', 'User');



