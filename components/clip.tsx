import * as React from "react";
import { Chip } from "react-native-paper";
import { StyleSheet, Text } from "react-native";
import { clipType } from "@/constants/type";
interface iChip {
  icon: string;
  onPress: () => void;
  text: string;
  type: string;
}


const wordsLen = (str: string) => {
  const array = str.trim().split(/\s+/);
  if(str==="") return 0;
  return array.length;
};

const countDownTimer=() => {
  
}


const CilpComponent = (props: iChip) => (
  <>
  {props.type===clipType.timer?
  <Chip style={styles.container} icon={props.icon} onPress={props.onPress}>
    <Text style={styles.text}>{props.text}</Text>
  </Chip>
:
  <Chip style={styles.container} icon={props.icon} onPress={props.onPress}>
    <Text style={styles.text}>{wordsLen(props.text)}</Text>
  </Chip>
}
</>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: "100%",
  },
  text: {
    fontSize: 16,
  },
});

export default CilpComponent;
