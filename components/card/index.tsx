import * as React from "react";
import {  Card, Text } from "react-native-paper";
import { StyleSheet } from "react-native";


interface iCard {
  title: string;
  content: string[];
  bullet: boolean;
}

const CardComp = (props: iCard) => (
  <Card style={styles.container} mode="contained">
    <Card.Content style={styles.content}>
      <Text variant="titleLarge">{props.title}</Text>
      {props.bullet ? (
        <Text variant="bodyLarge">
          <ul style={{ marginBlockStart: 0 }}>
            {props.content.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Text>
      ) : (
        <Text variant="bodyLarge">{props.content}</Text>
      )}
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: "100%",
  },
  content: {
    gap: 8,
  },
});

export default CardComp;
