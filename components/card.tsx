import * as React from 'react';
import { Avatar, Button, Card, Text, } from 'react-native-paper';
import {  StyleSheet } from 'react-native';

interface iCard{
    title: string;
    content: string;
}

const CardComp = ( props:iCard) => (
    <Card style={styles.container}>
    <Card.Content style={styles.content}>
      <Text variant="titleLarge">{props.title}</Text>
      <Text variant="bodyLarge">{props.content}</Text>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
      padding: 10,
      width: '100%',
    },
    content:{
      gap:8
    }
   
  });
  

export default CardComp;