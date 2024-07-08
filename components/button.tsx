import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet,Text} from 'react-native';


interface iButton{
    icon: string;
    mode?: string;
    onPress: () => void;
    text:string

}

const CustomButton = (props:iButton) => (
  <Button icon={props.icon} mode="contained" onPress={props.onPress}
    style={styles.container}
  >
    <Text style={styles.text}>
   {props.text}
    </Text>
  </Button>
);


const styles = StyleSheet.create({
    container: {
      borderRadius: 10,
      minWidth: 300,
      padding:4,
    
    },
    text:{
        fontSize:16
    }
   
  });

export default CustomButton;