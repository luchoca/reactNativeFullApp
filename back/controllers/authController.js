const { addUser, findUserByEmail } = require('../models/userModel');

const register = (req, res) => {
  try {
    const { nombre, apellido, email, cedula, password } = req.body;

    // Validar que todos los campos estén presentes
    if (!nombre || !apellido || !email || !cedula || !password) {
      return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios' });
    }

    // Validar si el email ya está registrado
    const userExists = findUserByEmail(email);
    if (userExists) {
      return res.status(400).json({ success: false, message: 'El correo electrónico ya está registrado' });
    }

    // Agregar el usuario si no existe
    addUser({ nombre, apellido, email, cedula, password });
    res.json({ success: true, message: 'Usuario registrado correctamente' });
  } catch (error) {
    console.error('Error en el registro:', error);
    res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
};

const login = (req, res) => {
  // Implementación del login
};

module.exports = { register, login };
