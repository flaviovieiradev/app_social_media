import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, CheckBox, RadioButton } from 'react-native';

const Profile = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [gender, setGender] = useState('masculino');
  const [notifications, setNotifications] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Nome:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Text>Bio:</Text>
      <TextInput
        value={bio}
        onChangeText={setBio}
        style={styles.input}
      />
      <Text>Gênero:</Text>
      <RadioButton.Group onValueChange={setGender} value={gender}>
        <View>
          <Text>Masculino</Text>
          <RadioButton value="masculino" />
        </View>
        <View>
          <Text>Feminino</Text>
          <RadioButton value="feminino" />
        </View>
        <View>
          <Text>Outro</Text>
          <RadioButton value="outro" />
        </View>
      </RadioButton.Group>
      <CheckBox
        value={notifications}
        onValueChange={setNotifications}
      />
      <Text>Receber Notificações</Text>
      <Button title="Salvar" onPress={() => console.log('Perfil salvo')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});

export default Profile;