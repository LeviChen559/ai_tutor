import * as React from "react";
import { Chip } from "react-native-paper";
import { StyleSheet, Text } from "react-native";

interface iChip {
  icon: string;
  text: string;
}

const wordsLen = (str: string) => {
  const array = str.trim().split(/\s+/);
  if (str === "") return 0;
  return array.length;
};


const CilpComponent = (props: iChip) => {


  return (
    
        <Chip
          style={styles.container}
          icon={props.icon}
        > 
          <Text style={styles.text}>{wordsLen(props.text)}</Text>
        </Chip>
      )}
   
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: "50%",
  },
  text: {
    fontSize: 16,
  },
});

export default CilpComponent;
