import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { register, login } from '../services/authService'; // Importar funciones de registro e inicio de sesión

const SignInScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [cedula, setCedula] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Estado para controlar si se está en modo de inicio de sesión o registro

  const handleSubmit = async () => {
    if (!email || !password || (!isLogin && (!nombre || !apellido || !cedula))) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Error', 'El correo electrónico no tiene un formato válido');
      return;
    }

    try {
      if (isLogin) {
        // Lógica de inicio de sesión
        const userData = { email, password };
        const response = await login(userData);
        Alert.alert('Éxito', response.message);
        navigation.navigate('Products'); // Redirigir a la pantalla de productos después del inicio de sesión
      } else {
        // Lógica de registro
        const userData = { nombre, apellido, email, cedula, password };
        const response = await register(userData);
        Alert.alert('Éxito', response.message);
        //navigation.navigate('Products'); // Redirigir a la pantalla de productos después del registro
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      Alert.alert('Error', errorMessage);
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin); // Alternar entre modo de inicio de sesión y registro
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.container}>
      {!isLogin && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={nombre}
            onChangeText={setNombre}
          />
          <TextInput
            style={styles.input}
            placeholder="Apellido"
            value={apellido}
            onChangeText={setApellido}
          />
          <TextInput
            style={styles.input}
            placeholder="Número de cédula"
            value={cedula}
            onChangeText={setCedula}
          />
        </>
      )}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title={isLogin ? 'Iniciar Sesión' : 'Registrar'} onPress={handleSubmit} />
      <Button title={isLogin ? 'Registrarse' : 'Iniciar Sesión'} onPress={toggleAuthMode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default SignInScreen;
