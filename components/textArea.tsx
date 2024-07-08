import * as React from "react";
import {
  TextInput,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { StyleSheet, View } from "react-native";

interface iTextInput {
  text: string;
  setText: (text: string) => void;
}

const theme = {
  ...DefaultTheme,
  roundness: 16,
  colors: {
    ...DefaultTheme.colors,
  },
};

const TextArea = (props: iTextInput) => {
  return (
    <PaperProvider theme={theme}>
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
    </PaperProvider>
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
    color: "black",
    backgroundColor: "#ffffff",
    height: 400,
    minWidth: 300,
    borderColor: "#000",
    textAlignVertical: "top", // this will align the text to the top
  },
});

export default TextArea;
