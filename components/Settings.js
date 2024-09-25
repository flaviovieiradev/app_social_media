import React, { useState } from 'react';
import { View, Text, StyleSheet, CheckBox, Picker, Button } from 'react-native';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  return (
    <View style={styles.container}>
      <CheckBox
        value={darkMode}
        onValueChange={setDarkMode}
      />
      <Text>Modo Escuro</Text>
      <Picker selectedValue={language} onValueChange={itemValue => setLanguage(itemValue)}>
        <Picker.Item label="Inglês" value="en" />
        <Picker.Item label="Português" value="pt" />
      </Picker>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Button title="Salvar Configurações" onPress={() => console.log('Configurações salvas')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default Settings;