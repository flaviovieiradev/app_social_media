import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação (simulada)
    navigation.navigate('Feed');
  };
  
  const handleProfile = () => {
    // Lógica de encaminhamento para a tela de perfil (Profile) (simulada)
    navigation.navigate('Profile');
  };

  const handleSettings = () => {
    // Lógica de encaminhamento para a tela de perfil (Profile) (simulada)
    navigation.navigate('Settings');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <br></br>
      <TouchableOpacity style={styles.button_cadastrar} onPress={handleProfile}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <TouchableOpacity style={styles.button_configuracoes} onPress={handleSettings}>
        <Text style={styles.buttonText}>Configurações</Text>
      </TouchableOpacity>
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
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  button_cadastrar: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  button_configuracoes: {
    backgroundColor: 'gray',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Login;