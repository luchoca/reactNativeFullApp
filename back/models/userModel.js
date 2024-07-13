// userModel.js

const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');

// Leer usuarios desde users.json
const getUsers = () => {
  const usersData = fs.readFileSync(usersFilePath, 'utf8');
  return JSON.parse(usersData);
};

// Escribir usuarios a users.json
const saveUsers = (users) => {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf8');
};

// Función para encontrar un usuario por email
const findUserByEmail = (email) => {
  const users = getUsers();
  return users.find(user => user.email === email);
};

// Función para encontrar un usuario por cédula
const findUserByCedula = (cedula) => {
  const users = getUsers();
  return users.find(user => user.cedula === cedula);
};

// Función para agregar un nuevo usuario
const addUser = (userData) => {
  const users = getUsers();
  users.push(userData);
  saveUsers(users);
};

module.exports = { findUserByEmail, findUserByCedula, addUser };
