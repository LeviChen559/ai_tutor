import * as React from "react";
import { TextInput } from "react-native-paper";
import {  StyleSheet, View } from 'react-native';

interface iTextInput {
    text: string;
    setText: (text: string) => void;

}

const TextArea = (
  props:iTextInput
) => {
  

  return (
    <View style={styles.container}>
        <TextInput
          id="textarea"
          multiline
          mode="outlined"
          style={styles.textArea}
          label=""
          value={props.text}
          onChangeText={props.setText}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      padding: 0,
    },
    textArea: {
      padding: 10,
      fontSize: 16,
      color: 'black',
      backgroundColor: '#ffffff',
      height: 300,
      minWidth: 300,
      borderRadius: 16,
      borderColor: '#000',
      borderWidth: 1,
      textAlignVertical: 'top', // this will align the text to the top
    },
  });
  
export default TextArea;
