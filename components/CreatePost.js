import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Picker } from 'react-native';

const CreatePost = ({ navigation }) => {
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('pessoal');

  const handleSubmit = () => {
    // Lógica para enviar a postagem (simulada)
    console.log(`Postagem enviada: ${content} na categoria ${category}`);
    navigation.navigate('Feed');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Conteúdo da Postagem"
        value={content}
        onChangeText={setContent}
        style={styles.input}
      />
      <Picker selectedValue={category} onValueChange={itemValue => setCategory(itemValue)}>
        <Picker.Item label="Pessoal" value="pessoal" />
        <Picker.Item label="Profissional" value="profissional" />
        <Picker.Item label="Memes" value="memes" />
      </Picker>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Button title="Enviar Postagem" onPress={handleSubmit} />
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

export default CreatePost;